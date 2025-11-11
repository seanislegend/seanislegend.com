import {draftMode} from 'next/headers';
import {getCollectionOpengraphImage} from '@/utils/collection-opengraph-image';

const handler = async () => {
    const draftModeConfig = await draftMode();
    return getCollectionOpengraphImage('green-hop-beer', draftModeConfig.isEnabled);
};

export const contentType = 'image/jpg';

export default handler;
