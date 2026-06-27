import Markdown from '@/components/Markdown';
import PageHeaderButtonList from '@/components/PageHeader/ButtonList';
import PublishedWorkLogos from '@/components/PublishedWorkLogos';
import {Heading2} from '@/components/UI/Headings';
import TextLink from '@/components/UI/TextLink';
import TitleTextGrid from '@/components/UI/TitleTextGrid';
import PhotosGrid from '@/app/services/PhotosGrid';

interface Props {
    ctaStyle?: 'button' | 'link';
    sections: ContentSection[];
}

const ContentSections: React.FC<Props> = ({ctaStyle = 'link', sections}) => (
    <>
        {sections.map((section: ContentSection) => {
            const ctas: {label: string; url: string}[] = [];

            if (ctaStyle === 'button') {
                if (section.ctaLabel && section.ctaUrl) {
                    ctas.push({label: section.ctaLabel, url: section.ctaUrl});
                }
                if (section.secondaryCtaLabel && section.secondaryCtaUrl) {
                    ctas.push({
                        label: section.secondaryCtaLabel,
                        url: section.secondaryCtaUrl
                    });
                }
            }

            return (
                <div key={section.title}>
                    {section.photoGrid?.photosCollection?.items && (
                        <PhotosGrid photos={section.photoGrid.photosCollection.items} />
                    )}
                    <TitleTextGrid
                        className="mt-8"
                        heading={
                            <>
                                <Heading2>{section.title}</Heading2>
                                {section.title === 'Editorial photography' && (
                                    <>
                                        <PublishedWorkLogos theme="light" />
                                        <div className="mb-4" />
                                    </>
                                )}
                            </>
                        }
                    >
                        <Markdown className="max-w-2xl text-pretty 2xl:max-w-5xl">
                            {section.content}
                        </Markdown>
                        {ctaStyle === 'button' && (
                            <div className="mt-4">
                                <PageHeaderButtonList ctas={ctas} />
                            </div>
                        )}
                        {ctaStyle === 'link' && (
                            <div className="mt-4">
                                <TextLink
                                    href={`${section?.ctaUrl ?? '/contact'}?service=${section.title}`}
                                >
                                    {section?.ctaLabel ?? 'Enquire'} about{' '}
                                    {section?.title?.toLowerCase()}
                                </TextLink>{' '}
                                {section.id && (
                                    <span>
                                        or{' '}
                                        <TextLink href={`/${section.id}-photography`}>
                                            View more photos
                                        </TextLink>
                                    </span>
                                )}
                            </div>
                        )}
                    </TitleTextGrid>
                </div>
            );
        })}
    </>
);

export default ContentSections;
