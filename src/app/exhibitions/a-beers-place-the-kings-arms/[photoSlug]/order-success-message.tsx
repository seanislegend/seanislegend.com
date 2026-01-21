'use client';

import Markdown from 'react-markdown';
import {useSearchParams} from 'next/navigation';
import Theme from '@/components/UI/Theme';

const ExhibitionPhotoOrderSuccessMessage: React.FC = () => {
    const params = useSearchParams();
    const wasOrderSuccess = params.get('order') === 'success';

    if (!wasOrderSuccess) return null;

    return (
        <Theme
            className="animate-in fade-in-0 slide-in-from-bottom-0.5 mt-4 mb-4 px-4 py-2 duration-500"
            theme="olive-green"
        >
            <Markdown>
                __Success!__ Your print has been ordered. It will be available to collect from The
                Kings Arms on __29th January__, from __6pm__. If you have any questions, please [get
                in touch](/contact).
            </Markdown>
        </Theme>
    );
};

export default ExhibitionPhotoOrderSuccessMessage;
