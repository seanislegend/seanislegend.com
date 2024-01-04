import {ImageResponse} from '@vercel/og';

export const getOgImage = async (photo: string, title?: string) => {
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
                <div
                    style={{backgroundImage: 'linear-gradient(to top, transparent, black)'}}
                    tw="absolute h-8/12 -mt-6 w-full"
                />
                {title && (
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
            height: 630,
            width: 1200
        }
    );
};
