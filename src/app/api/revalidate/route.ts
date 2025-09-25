import {NextRequest} from 'next/server';

export const POST = async (request: NextRequest) => {
    console.log(request);
    return Response.json({success: true});
};
