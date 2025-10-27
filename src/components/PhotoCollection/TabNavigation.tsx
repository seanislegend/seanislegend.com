import clsx from 'clsx';
import {useAtomValue} from 'jotai';
import Link from 'next/link';
import Container from '@/components/UI/Container';
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
        <div className="bg-active-theme/90 top-site-header-scrolled sticky z-50 backdrop-blur-2xl transition-all duration-500 will-change-transform lg:-mx-8">
            <Container className="mx-auto w-full max-w-[110rem] px-0 lg:px-0">
                <ul className="flex w-full flex-row gap-1 py-1">
                    {tabs.map(tab => (
                        <li key={tab.id} className="flex-grow">
                            <Link
                                className={clsx(
                                    'block rounded-sm py-2 text-center text-sm font-medium uppercase underline-offset-2 transition-colors duration-200 ease-in-out',
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
            </Container>
        </div>
    );
};

export default PhotoCollectionTabNavigation;
