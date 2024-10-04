import {draftMode} from 'next/headers';
import PhotoCarousel from '@/components/PhotoCarousel';
import Close from './Close';
import {getCollectionAndPhoto} from '@/app/[collection]/[photo]/page';

interface Props {
    params: Promise<{collection: string; photo: string}>;
}

const InterceptedPhotoPage: React.FC<Props> = async ({params}) => {
    const allParams = await params;
    const draftModeConfig = await draftMode();
    const {collection} = await getCollectionAndPhoto(
        allParams.collection,
        allParams.photo,
        draftModeConfig.isEnabled
    );

    if (!collection) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-sean-black/90 p-4 md:p-8">
            <div className="flex h-full w-full items-center justify-center">
                <div className="relative aspect-[4/3] h-full max-h-[85vh] w-full max-w-[1200px]">
                    <PhotoCarousel
                        collection={collection}
                        hasDetails={false}
                        isModal={true}
                        photo={allParams.photo}
                    />
                    <Close />
                </div>
            </div>
        </div>
    );
};

export default InterceptedPhotoPage;
