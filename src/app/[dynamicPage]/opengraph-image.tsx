import {draftMode} from 'next/headers';
import {getCollectionOpengraphImage} from '@/utils/collection-opengraph-image';

interface Props {
    params: Promise<{dynamicPage: string}>;
}

const handler = async ({params}: Props) => {
    const allParams = await params;
    const draftModeConfig = await draftMode();
    return getCollectionOpengraphImage(allParams.dynamicPage, draftModeConfig.isEnabled);
};

export const contentType = 'image/jpg';

export default handler;
