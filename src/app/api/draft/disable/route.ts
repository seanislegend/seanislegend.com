import {draftMode} from 'next/headers';

export const GET = async () => {
    const draftModeConfig = await draftMode();
    draftModeConfig.disable();
    return new Response('Draft mode is disabled');
};
