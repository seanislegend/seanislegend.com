import {createClient} from 'contentful-management';
import sharp from 'sharp';

const spaceId = process.env.CONTENTFUL_SPACE_ID || '';
const environmentId = process.env.CONTENTFUL_ENVIRONMENT_ID || '';
const accessToken = process.env.CONTENTFUL_MANAGEMENT_API_KEY || '';
const locale = process.env.CONTENTFUL_LOCALE || 'en-US';
const webhookSecret = process.env.CONTENTFUL_WEBHOOK_SECRET || '';

const client = createClient({accessToken});

const fetchAndEncodeImage = async (url: string): Promise<string> => {
    const response = await fetch(url);
    const buffer = Buffer.from(await response.arrayBuffer());
    const dimensions = await sharp(buffer).metadata();

    if (!dimensions.height || !dimensions.width) return '';

    const isPortrait = dimensions.height > dimensions.width;
    // we need a 10px image for a next image placeholder
    const resizedBuffer = await sharp(buffer)
        .resize(isPortrait ? {height: 10, width: 7} : {width: 10, height: 7})
        .toBuffer();
    const base64 = resizedBuffer.toString('base64');

    // images will always be jpg
    return `data:image/jpg;base64,${base64}`;
};

const returnResponse = (message: string, status: number) => new Response(message, {status});

export const POST = async (request: Request) => {
    const secret = request.headers.get('secret');

    if (secret !== webhookSecret) {
        return returnResponse('Unauthorized', 401);
    }

    const res = await request.json();
    const entryId = res.sys.id;
    const photoId = res.fields.photo[locale].sys.id;
    const currentBase64 = res.fields.base64?.[locale];

    // error handling for entry/environment is not implemented
    try {
        const space = await client.getSpace(spaceId);
        const environment = await space.getEnvironment(environmentId);
        const asset = await environment.getAsset(photoId);
        const fileUrl = asset.fields.file[locale].url;

        if (fileUrl) {
            // the url does not contain the protocol
            const base64 = await fetchAndEncodeImage(`https:${fileUrl}`);

            if (base64) {
                if (base64 === currentBase64) {
                    return returnResponse('No change', 200);
                }

                // update the photo entry with the new base64
                const entry = await environment.getEntry(entryId);

                if (entry.fields.base64) {
                    entry.fields.base64[locale] = base64;
                } else {
                    entry.fields.base64 = {[locale]: base64};
                }

                const update = await entry.update();
                await update.publish();

                return returnResponse(base64, 200);
            }

            return returnResponse('No base64 generated', 500);
        }

        return returnResponse('No file url found', 500);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'unknown error';
        return returnResponse(message, 500);
    }
};

export const dynamic = 'force-dynamic';
