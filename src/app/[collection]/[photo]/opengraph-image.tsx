import {getCollectionOg} from '@/utils/og';

const handler = async ({params}: {params: {collection: string; photo: string}}) => {
    return await getCollectionOg('og', params.collection, params.photo);
};

export const runtime = 'edge';
export default handler;
