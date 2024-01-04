import {getCollectionOg} from '@/utils/og';

const handler = async ({params}: {params: {collection: string; photo: string}}) => {
    return await getCollectionOg('twitter', params.collection, params.photo);
};

export const runtime = 'edge';
export default handler;
