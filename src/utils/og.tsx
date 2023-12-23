import {ImageResponse} from '@vercel/og';

export const getOgImage = async (photos: string[]) => {
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
                <div tw="flex w-full bg-white h-full flex-wrap">
                    {photos.map((photo, index) => {
                        const className =
                            photos.length > 1
                                ? `flex w-full bg-gray-100 w-1/2 h-1/2 bg-cover bg-center bg-no-repeat ${
                                      index % 2 === 0 ? 'border-r-4 border-white' : ''
                                  } ${index < 2 ? 'border-b-4 border-white' : ''}`
                                : 'bg-no-repeat bg-cover bg-center bg-no-repeat w-full h-full absolute';

                        return (
                            <div
                                key={photo}
                                tw={className}
                                style={{
                                    backgroundImage: `url(${photo
                                        .replace('fm=webp', '')
                                        .replace('w=1800', 'w=800')})`,
                                    backgroundSize: '100% 130%',
                                    backgroundPosition: '0 -15%'
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        ),
        {width: 1200, height: 630}
    );
};
