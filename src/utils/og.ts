import {createHmac} from 'node:crypto';
import 'server-only';

const generateHmacToken = (data: string) => {
    const hmac = createHmac('sha256', String(process.env.PREVIEW_SECRET));
    hmac.update(data);
    return hmac.digest('hex');
};

export const getGeneratedCollectionOgUrl = (collection: PhotoCollection) => {
    // Get images and create a token for securing our dynamic og image
    const photos = collection.photosCollection.items
        .map(p => p?.fullSize?.url)
        .filter(i => i)
        .slice(0, 4);
    const token = generateHmacToken(JSON.stringify(photos));
    const tokenisedUrl = `${String(process.env.NEXT_PUBLIC_URL)}/api/og?photos=${encodeURIComponent(
        JSON.stringify(photos)
    )}&token=${token}`;

    return tokenisedUrl;
};
