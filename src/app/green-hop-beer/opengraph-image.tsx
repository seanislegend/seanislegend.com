import {draftMode} from 'next/headers';
import {getCollectionOpengraphImage} from '@/utils/collection-opengraph-image';

<<<<<<< HEAD
<<<<<<< HEAD
const handler = async () => {
=======
export const handler = async () => {
>>>>>>> 3f0d2ab (feat: Update opengraph images)
=======
const handler = async () => {
>>>>>>> 7936980 (feat: Add 404 response for missing collection/photos)
    const draftModeConfig = await draftMode();
    return getCollectionOpengraphImage('green-hop-beer', draftModeConfig.isEnabled);
};

export const contentType = 'image/jpg';

export default handler;
