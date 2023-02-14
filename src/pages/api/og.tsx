import {NextRequest} from 'next/server';
import {ImageResponse} from '@vercel/og';

const key = crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(String(process.env.PREVIEW_SECRET)),
    {name: 'HMAC', hash: {name: 'SHA-256'}},
    false,
    ['sign']
);

const toHex = (arrayBuffer: ArrayBuffer) => {
    return Array.prototype.map
        .call(new Uint8Array(arrayBuffer), n => n.toString(16).padStart(2, '0'))
        .join('');
};

const isTokenValid = async (token: string, data: string) => {
    const verifyToken = toHex(
        await crypto.subtle.sign('HMAC', await key, new TextEncoder().encode(data))
    );

    return token === verifyToken;
};

const handler = async (req: NextRequest) => {
    const {searchParams} = req.nextUrl;
    const photos = searchParams.get('photos');
    // Bug from generated metadata URL malforms the token param
    const token = searchParams.get('token');
    if (!photos || !token) return;

    const decodedPhotos = decodeURIComponent(photos);
    const isValid = await isTokenValid(token, decodedPhotos);
    if (!isValid) return new Response('Invalid token.', {status: 401});

    return new ImageResponse(
        (
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    width: '100%'
                }}
            >
                <div tw="flex w-full bg-white h-full flex-wrap bg-cover bg-center bg-no-repeat">
                    {JSON.parse(decodedPhotos).map((photo: string, index: number) => (
                        <div
                            key={photo}
                            tw={`flex w-full bg-red-100 w-1/2 h-1/2 bg-cover bg-center bg-no-repeat ${
                                index % 2 === 0 ? 'border-r-4 border-white' : ''
                            } ${index < 2 ? 'border-b-4 border-white' : ''}`}
                            style={{
                                backgroundImage: `url(${photo
                                    .replace('fm=webp', '')
                                    .replace('w=1800', 'w=800')}`,
                                backgroundSize: '100% 130%',
                                backgroundPosition: '0 -15%'
                            }}
                        />
                    ))}
                </div>
            </div>
        ),
        {width: 1200, height: 630}
    );
};

export const config = {runtime: 'edge'};

export default handler;
