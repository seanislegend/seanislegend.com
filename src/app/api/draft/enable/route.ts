import {draftMode} from 'next/headers';
import {redirect} from 'next/navigation';

export const GET = async (request: Request) => {
    const draftModeConfig = await draftMode();
    const {searchParams} = new URL(request.url);
    const returnUrl = searchParams.get('return');
    const secret = searchParams.get('secret');

    if (secret !== process.env.PREVIEW_SECRET) {
        return new Response('Invalid token', {status: 401});
    }

    draftModeConfig.enable();
    redirect(returnUrl || '/');
};
