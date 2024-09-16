import {getCollectionOg} from '@/utils/og';

const handler = async ({params}: {params: {collection: string}}) => {
    return await getCollectionOg('twitter', params.collection);
};

export const runtime = 'edge';
export default handler;
