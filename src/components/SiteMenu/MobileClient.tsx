'use client';

import {LINKS} from '@/components/SiteFooter';
import SiteMenuLink from '@/components/SiteMenu/Link';
import SocialLinks from '@/components/SiteMenu/SocialLinks';
import UnderlineLink from '@/components/UnderlineLink';
import {isMenuOpenAtom} from '@/utils/store';
import {motion} from 'framer-motion';
import {useAtom} from 'jotai';

interface Props {
    links: Link[];
}

const SiteMenuMobile: React.FC<Props> = ({links}) => {
    const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom);

    return (
        <>
            <motion.div
                className="absolute top-10 z-[100] w-full md:hidden"
                animate={isMenuOpen ? 'open' : 'closed'}
                initial="closed"
                transition={{type: 'spring', duration: 1, velocity: 1}}
                variants={{
                    open: {
                        opacity: 1,
                        height: '100vh',
                        transition: {height: {duration: 0}}
                    },
                    closed: {
                        opacity: 0,
                        transition: {delay: 0.2},
                        transitionEnd: {
                            height: 0,
                            overflow: 'hidden'
                        }
                    }
                }}
            >
                <div className="bg-white py-8 px-4 dark:bg-black md:hidden">
                    <motion.div
                        animate={isMenuOpen ? 'open' : 'closed'}
                        className="flex space-x-10"
                        initial="closed"
                        transition={{type: 'spring', duration: 1, velocity: 1}}
                        variants={{
                            open: {opacity: 1, transition: {delay: 0.2}},
                            closed: {opacity: 0}
                        }}
                    >
                        <nav className="flex-grow space-y-1 sm:columns-2">
                            {links?.map(link => (
                                <SiteMenuLink key={link.url} {...link} />
                            ))}
                            <SiteMenuLink url="/collections" title="All collections" />
                        </nav>
                        <nav className="flex min-w-[100px] flex-col items-end space-y-2 md:hidden">
                            {LINKS.map(link => (
                                <UnderlineLink
                                    href={link.url}
                                    key={link.url}
                                    className="text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </UnderlineLink>
                            ))}
                            <div className="pt-4">
                                <SocialLinks />
                            </div>
                        </nav>
                    </motion.div>
                </div>
                <div className="h-44 bg-gradient-to-b from-white dark:from-black" />
            </motion.div>
            <motion.div
                className="fixed top-0 left-0 right-0 z-[99] h-0 bg-white dark:bg-black md:hidden"
                animate={isMenuOpen ? 'open' : 'closed'}
                initial="closed"
                variants={{
                    open: {
                        height: '100vh',
                        opacity: 0.8,
                        transition: {
                            easing: 'linear',
                            height: {duration: 0}
                        }
                    },
                    closed: {
                        opacity: 0,
                        transitionEnd: {
                            height: 0,
                            overflow: 'hidden'
                        }
                    }
                }}
            />
        </>
    );
};

export default SiteMenuMobile;
