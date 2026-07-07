'use client';

import {useState} from 'react';
import {RemoveScroll} from 'react-remove-scroll';
import {AnimatePresence} from 'motion/react';
import * as m from 'motion/react-m';
import {CaretDownIcon} from '@/components/Icon/CaretDown';
import {CrossIcon} from '@/components/Icon/Cross';
import {MenuIcon} from '@/components/Icon/Menu';
import {HEADER_MENU_ITEMS} from '@/components/SiteMenu';
import AllTagsList from '@/components/SiteMenu/AllTagsList';
import SocialLinks from '@/components/SiteMenu/SocialLinks';
import Badge from '@/components/UI/Badge';
import Container from '@/components/UI/Container';
import SiteMenuLink from './Link';

interface Props {
    links: Link[];
    tags: Tag[];
}

const WORK_TYPES: {key: NonNullable<Link['workType']>; label: string}[] = [
    {key: 'commercial', label: 'Commercial'},
    {key: 'personal', label: 'Personal'}
];

interface CollapsibleSectionProps {
    label: string;
    testId?: string;
    children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({label, testId, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-accent/50 flex flex-col rounded-lg p-1">
            <button
                aria-expanded={isOpen}
                className="flex items-center justify-between px-2.5 py-1.5 text-[16px] font-medium uppercase focus:outline-none"
                data-testid={testId}
                onClick={() => setIsOpen(prev => !prev)}
                type="button"
            >
                <span>{label}</span>
                <CaretDownIcon
                    className={`h-3 w-3 shrink-0 fill-current transition-transform duration-300 ease-in-out ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <m.div
                        animate={{height: 'auto', opacity: 1}}
                        className="overflow-hidden"
                        exit={{height: 0, opacity: 0}}
                        initial={{height: 0, opacity: 0}}
                        transition={{duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
                    >
                        <div className="py-2">{children}</div>
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface WorkTypeSectionProps {
    label: string;
    typeKey: NonNullable<Link['workType']>;
    links: Link[];
    onNavigate: () => void;
}

const WorkTypeSection: React.FC<WorkTypeSectionProps> = ({label, typeKey, links, onNavigate}) => (
    <CollapsibleSection
        label={`${label} photography`}
        testId={`mobile-menu-worktype-toggle-${typeKey}`}
    >
        <div className="flex flex-col space-y-2">
            {links.map(link => (
                <SiteMenuLink
                    className="ml-4 space-y-2"
                    key={link.url}
                    href={link.url}
                    onClick={onNavigate}
                >
                    <span className="flex items-center gap-2">
                        <span>{link.title}</span>
                        {link.badge && <Badge>{link.badge} </Badge>}
                    </span>
                    <small className="text-dimmed-text block text-[12px] leading-tight normal-case">
                        {link.pageTitle}
                    </small>
                </SiteMenuLink>
            ))}
            <SiteMenuLink className="ml-4 text-[16px]" href={`/${typeKey}`} onClick={onNavigate}>
                View all {label.toLowerCase()}
            </SiteMenuLink>
        </div>
    </CollapsibleSection>
);

const SiteMenuMobile: React.FC<Props> = ({links, tags}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ToggleButtonIcon = isMenuOpen ? CrossIcon : MenuIcon;

    return (
        <>
            <button
                className="relative z-30 size-6 focus:ring-2 focus:outline-none lg:hidden print:hidden"
                data-testid="mobile-menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
            >
                <ToggleButtonIcon className="text-theme-text h-auto w-6" />
            </button>
            {isMenuOpen && (
                <RemoveScroll
                    className="top-site-header absolute left-0 z-100 w-full lg:hidden print:hidden"
                    data-testid="mobile-menu"
                    style={{
                        height: isMenuOpen ? '100vh' : '0',
                        opacity: isMenuOpen ? 1 : 0.8
                    }}
                >
                    <div
                        key={isMenuOpen ? 'collections-open' : 'collections-closed'}
                        className="bg-theme-bg animate-in fade-in slide-in-from-bottom-1.5 h-[calc(100vh-var(--site-header-height))] overflow-y-auto duration-300 lg:hidden"
                    >
                        <Container>
                            <div className="flex h-full flex-col space-y-4 py-4">
                                <nav
                                    className="-ml-2 flex flex-col space-y-2"
                                    data-testid="mobile-menu-collections-navigation"
                                >
                                    {HEADER_MENU_ITEMS.map(link => (
                                        <SiteMenuLink
                                            className="text-[16px]"
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.label}
                                        </SiteMenuLink>
                                    ))}
                                    {WORK_TYPES.map(({key, label}) => {
                                        const workTypeLinks = links?.filter(
                                            link => link.workType === key
                                        );
                                        if (!workTypeLinks?.length) return null;

                                        return (
                                            <WorkTypeSection
                                                key={key}
                                                label={label}
                                                links={workTypeLinks}
                                                onNavigate={() => setIsMenuOpen(false)}
                                                typeKey={key}
                                            />
                                        );
                                    })}
                                    {tags?.length > 0 && (
                                        <CollapsibleSection
                                            label="Categories"
                                            testId="mobile-menu-tags-toggle"
                                        >
                                            <div className="ml-4">
                                                <AllTagsList items={tags} variant="stack" />
                                            </div>
                                        </CollapsibleSection>
                                    )}
                                </nav>
                                <div
                                    className="pt-8 lg:hidden"
                                    style={{
                                        paddingBottom: `calc(6rem + env(safe-area-inset-bottom, 0px))`
                                    }}
                                >
                                    <SocialLinks />
                                </div>
                            </div>
                        </Container>
                    </div>
                </RemoveScroll>
            )}
            <div
                className="bg-overlay-bg top-site-header fixed right-0 left-0 z-20 h-0 lg:hidden"
                style={{height: isMenuOpen ? '100vh' : '0', opacity: isMenuOpen ? 0.8 : 0}}
            />
        </>
    );
};

export default SiteMenuMobile;
