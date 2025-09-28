import {ImageResponse} from '@vercel/og';

const ImageWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <div tw="relative flex w-full flex-col items-center justify-center bg-white">
            <div tw="flex w-full bg-white h-full flex-wrap">{children}</div>
            <div
                style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/images/og-logo.png)`,
                    backgroundSize: '100% 100%'
                }}
                tw="absolute bottom-2 right-2 h-10 w-10"
            />
        </div>
    );
};

const generatedOneImage = async (photo: string) => {
    return new ImageResponse(
        (
            <ImageWrapper>
                <div
                    key={photo}
                    tw="w-full h-full absolute"
                    style={{
                        backgroundImage: `url(${photo
                            .replace('fm=webp', '')
                            .replace('w=1800', 'w=800')})`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: '0 center'
                    }}
                />
            </ImageWrapper>
        ),
        {width: 1200, height: 630}
    );
};

const generatedFourTiledImage = async (photos: string[]) => {
    return new ImageResponse(
        (
            <ImageWrapper>
                {photos.map((photo, index) => {
                    const className = `flex bg-gray-100 w-1/2 h-1/2 ${
                        index % 2 === 0 ? 'border-r-4 border-white' : ''
                    } ${index < 2 ? 'border-b-4 border-white' : ''}`;

                    return (
                        <div
                            key={photo}
                            tw={className}
                            style={{
                                backgroundImage: `url(${photo
                                    .replace('fm=webp', '')
                                    .replace('w=1800', 'w=800')})`,
                                backgroundSize: '100% 134%',
                                backgroundPosition: '0 -17%'
                            }}
                        />
                    );
                })}
            </ImageWrapper>
        ),
        {width: 1200, height: 630}
    );
};

const generatedTwoTiledImage = async (photos: string[]) => {
    return new ImageResponse(
        (
            <ImageWrapper>
                {photos.map((photo, index) => {
                    const className = `flex bg-gray-100 w-1/2 h-full ${
                        index % 2 === 0 ? 'border-r-4 border-white' : ''
                    }`;

                    return (
                        <div
                            key={photo}
                            tw={className}
                            style={{
                                backgroundImage: `url(${photo
                                    .replace('fm=webp', '')
                                    .replace('w=1800', 'w=800')})`,
                                backgroundSize: '134% 100%',
                                backgroundPosition: '-17% 0'
                            }}
                        />
                    );
                })}
            </ImageWrapper>
        ),
        {width: 1200, height: 630}
    );
};

export const getOgImage = async (photos: string[]) => {
    if (photos.length === 1) {
        return generatedOneImage(photos[0]);
    } else if (photos.length === 2) {
        return generatedTwoTiledImage(photos);
    }

    return generatedFourTiledImage(photos);
};
