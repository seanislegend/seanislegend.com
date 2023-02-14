'use client';

import {useEffect} from 'react';
import splitbee from '@splitbee/web';

const useAnalytics = () => {
    const trackEvent = (name: string, data: any) => {
        splitbee.track(name, data);
    };

    useEffect(() => {
        splitbee.init({token: process.env.NEXT_PUBLIC_SPLITBEE_PROJECT_ID});
    }, []);

    return {trackEvent};
};

export default useAnalytics;
