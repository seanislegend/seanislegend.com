import clsx from 'clsx';
import {useAtomValue} from 'jotai';
import Link from 'next/link';
import {activeThemeAtom} from '@/utils/store';

interface Props {
    tabs: {
        id: string;
        label: string;
    }[];
}

const PhotoCollectionTabNavigation: React.FC<Props> = ({tabs}) => {
    const activeTheme = useAtomValue(activeThemeAtom);

    return (
        <div
            className="bg-active-theme/90 top-site-header-scrolled sticky z-50 -mx-4 overflow-x-auto px-1 whitespace-nowrap backdrop-blur-2xl transition-colors duration-500 will-change-transform md:-mx-8"
            data-slot="tab-navigation"
        >
            <ul className="flex w-full flex-row gap-1 py-1">
                {tabs.map(tab => (
                    <li key={tab.id} className="grow">
                        <Link
                            className={clsx(
                                'text-theme-text block rounded-sm py-2 text-center text-xs font-medium uppercase underline-offset-4 transition-colors duration-300 ease-in-out md:text-sm',
                                {
                                    'bg-accent pointer-events-none underline':
                                        tab.id === activeTheme.id,
                                    'bg-accent/50 hover:bg-accent/80': tab.id !== activeTheme.id
                                }
                            )}
                            href={`#${tab.id}`}
                        >
                            {tab.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PhotoCollectionTabNavigation;
