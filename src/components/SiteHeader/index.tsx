import {Suspense} from 'react';
import SiteHeader from '@/components/SiteHeader/Header';
import SiteMenu from '@/components/SiteMenu';
import SiteMenuDynamic from '@/components/SiteMenu/DynamicMenu/index';

const SiteHeaderWrapper: React.FC = async () => (
    <SiteHeader>
        <Suspense fallback={<SiteMenu />}>
            <SiteMenuDynamic />
        </Suspense>
    </SiteHeader>
);

export default SiteHeaderWrapper;
