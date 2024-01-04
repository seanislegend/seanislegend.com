import {getCollectionOg} from '@/utils/og';

const handler = async ({params}: {params: {collection: string}}) => {
    return await getCollectionOg('og', params.collection);
};

export const runtime = 'edge';
export default handler;
