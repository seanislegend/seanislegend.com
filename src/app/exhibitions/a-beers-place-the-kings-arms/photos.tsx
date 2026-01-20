'use client';

import {Link} from 'next-view-transitions';
import ThumbnailImage from '@/components/PhotoCollection/ThumbnailImage';
import SwipeableContainer from '@/components/UI/SwipeableContainer';

interface Props {
    exhibition: Exhibition;
}

const ExhibitionPhotos: React.FC<Props> = ({exhibition}) => {
    const renderPhoto = (index: number) => {
        if (!photos[index]?.photo?.thumbnail) return null;
        return (
            <ThumbnailImage
                alt={photos[index].title}
                base64={photos[index].photo?.base64}
                loading="lazy"
                columnSize={4}
                {...photos[index].photo?.thumbnail}
            />
        );
    };

    const photos = exhibition.photosCollection?.items || [];
    if (!photos.length) return null;

    return (
        <SwipeableContainer>
            <div className="flex gap-[30px] md:gap-[60px] [&_a]:duration-300 [&_a]:ease-in-out [&_a]:hover:-translate-y-1 [&_a]:hover:opacity-70 [&_span,&_img]:absolute [&_span,&_img]:h-full [&_span,&_img]:w-full [&_span,&_img]:object-cover [&_span,&_img]:object-center">
                <div className="mb-20 flex flex-row">
                    <div className="flex w-[500px] flex-col gap-[30px] md:w-[560px] md:gap-[50px]">
                        <div className="flex w-[440px] flex-row gap-[20px] md:gap-[40px]">
                            <Link
                                className="relative h-[158px] w-[220px] shrink-0 border-6 border-[#000] bg-white"
                                href={`/exhibitions/${exhibition.slug}/${photos[1]?.slug}`}
                            >
                                <div className="absolute top-1/2 left-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 border-white">
                                    {renderPhoto(1)}
                                </div>
                            </Link>
                            <Link
                                href={`/exhibitions/${exhibition.slug}/${photos[2]?.slug}`}
                                className="relative h-[158px] w-[220px] shrink-0 border-6 border-[#000] bg-white"
                            >
                                <div className="absolute top-1/2 left-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 border-white">
                                    {renderPhoto(2)}
                                </div>
                            </Link>
                        </div>
                        <div className="flex w-[460px] flex-row gap-[10px] md:gap-[30px]">
                            <Link
                                href={`/exhibitions/${exhibition.slug}/${photos[0]?.slug}`}
                                className="relative h-[118px] w-[160px] shrink-0 border-6 border-white bg-gray-50"
                            >
                                <div className="absolute top-1/2 left-1/2 h-[85%] w-[92.5%] -translate-x-1/2 -translate-y-1/2 border-white">
                                    {renderPhoto(0)}
                                </div>
                            </Link>
                            <Link
                                href={`/exhibitions/${exhibition.slug}/${photos[5]?.slug}`}
                                className="relative h-[110px] w-[135px] shrink-0 border-6 border-[#000] bg-white"
                            >
                                <div className="absolute top-1/2 left-1/2 h-[80%] w-[92.5%] -translate-x-1/2 -translate-y-1/2 border-white">
                                    {renderPhoto(5)}
                                </div>
                            </Link>
                            <Link
                                href={`/exhibitions/${exhibition.slug}/${photos[6]?.slug}`}
                                className="relative h-[103px] w-[155px] shrink-0 border-6 border-[#caad80] bg-white"
                            >
                                <div className="absolute top-1/2 left-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 border-white">
                                    {renderPhoto(6)}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex w-[240px] flex-col gap-[20px] md:gap-[40px]">
                        <Link
                            href={`/exhibitions/${exhibition.slug}/${photos[3]?.slug}`}
                            className="relative h-[220px] w-[165px] shrink-0 border-6 border-[#000] bg-white"
                        >
                            <div className="absolute top-1/2 left-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 border-white">
                                {renderPhoto(3)}
                            </div>
                        </Link>
                        <Link
                            href={`/exhibitions/${exhibition.slug}/${photos[9]?.slug}`}
                            className="relative h-[158px] w-[220px] shrink-0 border-6 border-[#000] bg-white"
                        >
                            <div className="absolute top-1/2 left-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 border-white">
                                {renderPhoto(9)}
                            </div>
                        </Link>
                    </div>
                    <div className="flex w-[220px] flex-col gap-[10px] md:gap-[30px]">
                        <Link
                            href={`/exhibitions/${exhibition.slug}/${photos[4]?.slug}`}
                            className="relative h-[158px] w-[220px] shrink-0 border-6 border-[#000] bg-white"
                        >
                            <div className="absolute top-1/2 left-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 border-white">
                                {renderPhoto(4)}
                            </div>
                        </Link>
                        <div className="flex h-full flex-col items-end justify-between pt-[20px]">
                            <Link
                                href={`/exhibitions/${exhibition.slug}/${photos[8]?.slug}`}
                                className="relative h-[85px] w-[110px] shrink-0 border-6 border-white bg-gray-50"
                            >
                                <div className="absolute top-1/2 left-1/2 h-[80%] w-[87.5%] -translate-x-1/2 -translate-y-1/2 border-white">
                                    {renderPhoto(8)}
                                </div>
                            </Link>
                            <Link
                                href={`/exhibitions/${exhibition.slug}/${photos[7]?.slug}`}
                                className="relative h-[85px] w-[110px] shrink-0 self-start border-6 border-white bg-gray-50"
                            >
                                <div className="absolute top-1/2 left-1/2 h-[80%] w-[87.5%] -translate-x-1/2 -translate-y-1/2 border-white">
                                    {renderPhoto(7)}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mb-20 flex flex-row gap-[20px]">
                    <div className="mt-[44px] flex w-[220px]">
                        <Link
                            href={`/exhibitions/${exhibition.slug}/${photos[10]?.slug}`}
                            className="relative h-[158px] w-[220px] shrink-0 border-6 border-[#000] bg-white"
                        >
                            <div className="absolute top-1/2 left-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 border-white">
                                {renderPhoto(10)}
                            </div>
                        </Link>
                    </div>
                    <div className="mt-[102px] w-[293px]">
                        <Link
                            href={`/exhibitions/${exhibition.slug}/${photos[11]?.slug}`}
                            className="relative block h-[207px] w-[293px] border-10 border-white"
                        >
                            {renderPhoto(11)}
                        </Link>
                    </div>
                    <div className="flex w-[135px] flex-col gap-[20px] md:gap-[40px]">
                        <Link
                            href={`/exhibitions/${exhibition.slug}/${photos[12]?.slug}`}
                            className="relative h-[110px] w-[135px] shrink-0 border-6 border-[#000] bg-white"
                        >
                            <div className="absolute top-1/2 left-1/2 h-[80%] w-[92.5%] -translate-x-1/2 -translate-y-1/2 border-white">
                                {renderPhoto(12)}
                            </div>
                        </Link>
                        <Link
                            href={`/exhibitions/${exhibition.slug}/${photos[14]?.slug}`}
                            className="relative h-[160px] w-[118px] shrink-0 border-6 border-white bg-gray-50"
                        >
                            <div className="absolute top-1/2 left-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 border-white">
                                {renderPhoto(14)}
                            </div>
                        </Link>
                    </div>
                    <div className="flex w-[220px] flex-col gap-[20px] md:gap-[40px]">
                        <Link
                            href={`/exhibitions/${exhibition.slug}/${photos[13]?.slug}`}
                            className="relative h-[158px] w-[220px] shrink-0 border-6 border-[#000] bg-white"
                        >
                            <div className="absolute top-1/2 left-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 border-white">
                                {renderPhoto(13)}
                            </div>
                        </Link>
                        <div className="flex w-[123px] flex-row gap-[30px]">
                            <Link
                                href={`/exhibitions/${exhibition.slug}/${photos[15]?.slug}`}
                                className="relative h-[110px] w-[135px] shrink-0 border-6 border-[#000] bg-white"
                            >
                                <div className="absolute top-1/2 left-1/2 h-[80%] w-[92.5%] -translate-x-1/2 -translate-y-1/2 border-white">
                                    {renderPhoto(15)}
                                </div>
                            </Link>
                            <div className="flex w-[220px] flex-col gap-[20px] md:gap-[40px]">
                                <Link
                                    href={`/exhibitions/${exhibition.slug}/${photos[16]?.slug}`}
                                    className="relative h-[52px] w-[73px] shrink-0 border-6 border-white [&_img]:h-[40px]!"
                                >
                                    {renderPhoto(16)}
                                </Link>
                                <Link
                                    href={`/exhibitions/${exhibition.slug}/${photos[17]?.slug}`}
                                    className="relative h-[52px] w-[73px] shrink-0 border-6 border-white [&_img]:h-[40px]!"
                                >
                                    {renderPhoto(17)}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-20 ml-[20px] flex flex-col items-center gap-[30px] md:ml-[40px] md:gap-[40px]">
                    <Link
                        href={`/exhibitions/${exhibition.slug}/${photos[18]?.slug}`}
                        className="relative h-[158px] w-[220px] shrink-0 border-6 border-[#000] bg-white"
                    >
                        <div className="absolute top-1/2 left-1/2 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 border-white">
                            {renderPhoto(18)}
                        </div>
                    </Link>
                    <div className="flex w-[220px] flex-row justify-between gap-[10px]">
                        <Link
                            href={`/exhibitions/${exhibition.slug}/${photos[19]?.slug}`}
                            className="relative h-[160px] w-[118px] shrink-0 border-6 border-white bg-gray-50"
                        >
                            <div className="absolute top-1/2 left-1/2 h-[65%] w-[75%] -translate-x-1/2 -translate-y-1/2 border-white">
                                {renderPhoto(19)}
                            </div>
                        </Link>
                        <Link
                            href={`/exhibitions/${exhibition.slug}/${photos[20]?.slug}`}
                            className="relative mt-[30px] h-[155px] w-[103px] shrink-0 border-6 border-[#caad80] bg-white"
                        >
                            <div className="absolute top-1/2 left-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 border-white">
                                {renderPhoto(20)}
                            </div>
                        </Link>
                    </div>
                </div>
                <div />
            </div>
        </SwipeableContainer>
    );
};

export default ExhibitionPhotos;
