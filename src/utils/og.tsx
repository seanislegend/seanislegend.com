import {ImageResponse} from '@vercel/og';
import {fetchCollection} from '@/utils/contentful';

export const getOgImage = async (type: 'og' | 'twitter', photo: string, title?: string) => {
    const titleFont = await fetch(
        new URL('@/../public/fonts/PPEiko-Medium.ttf', import.meta.url)
    ).then(res => res.arrayBuffer());

    return new ImageResponse(
        (
            <div tw="relative flex h-full w-full">
                <div
                    tw="w-full h-full absolute"
                    style={{
                        backgroundImage: `url(${photo
                            .replace('fm=webp', '')
                            .replace('w=1800', 'w=1200')})`,
                        backgroundSize: '100% 130%',
                        backgroundPosition: '0 -15%'
                    }}
                />
                {type === 'twitter' && (
                    <div
                        style={{backgroundImage: 'linear-gradient(to top, transparent, black)'}}
                        tw="absolute h-8/12 -mt-6 w-full"
                    />
                )}
                {type === 'twitter' && title && (
                    <div tw="absolute w-8/12 flex items-end align-start top-6 left-12">
                        <p tw="text-5xl text-white leading-normal wrap-balance">{title}</p>
                    </div>
                )}
                <div
                    style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/images/og-logo.png)`,
                        backgroundSize: '100% 100%'
                    }}
                    tw="absolute bottom-5 left-8 h-14 w-14"
                />
            </div>
        ),
        {
            fonts: [{name: 'PPEiko-Medium', data: titleFont, style: 'normal', weight: 600}],
            ...(type === 'twitter' ? {width: 1200, height: 675} : {width: 1200, height: 630})
        }
    );
};

export const getCollectionOg = async (
    type: 'og' | 'twitter',
    collectionSlug: string,
    photoSlug?: string
) => {
    const collection = await fetchCollection(collectionSlug);
    if (!collection) return;

    const items = collection.photosCollection.items;
    const photo = photoSlug ? items.find(i => i.slug === photoSlug)?.fullSize : items[0].fullSize;
    if (!photo) return;

    return getOgImage(type, photo.url, collection.pageTitle || collection.title);
};
