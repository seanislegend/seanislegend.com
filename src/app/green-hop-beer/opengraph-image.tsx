import {draftMode} from 'next/headers';
import {getCollectionOpengraphImage} from '@/utils/collection-opengraph-image';

<<<<<<< HEAD
const handler = async () => {
=======
export const handler = async () => {
>>>>>>> 3f0d2ab (feat: Update opengraph images)
    const draftModeConfig = await draftMode();
    return getCollectionOpengraphImage('green-hop-beer', draftModeConfig.isEnabled);
};

export const contentType = 'image/jpg';

export default handler;
