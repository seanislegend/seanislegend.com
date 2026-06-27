import DefaultLayout from '@/components/Layouts/Default';
import Markdown from '@/components/Markdown';
import PageHeader from '@/components/PageHeader';
import AllTagsList from '@/components/SiteMenu/AllTagsList';
import Container from '@/components/UI/Container';
import ContentSections from '@/app/services/ContentSection';
import PhotosGrid from '@/app/services/PhotosGrid';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const DEFAULT_TAGS: TagListItem[] = [];

interface Props {
    editorial: Editorial;
    tags?: TagListItem[];
}

const EditorialPage: React.FC<Props> = ({editorial, tags = DEFAULT_TAGS}) => (
    <DefaultLayout theme="light">
        <PageHeader
            backUrl={`/${editorial.slug}`}
            title={editorial.pageTitle || editorial.title}
            titleAside={
                editorial.photosCollection &&
                editorial.photosCollection.items.length > 0 && (
                    <PhotosGrid
                        photos={editorial.photosCollection.items.map(photo => ({
                            label: photo.title,
                            photo: {photo: photo.thumbnail, slug: photo.slug},
                            url: photo.url || ''
                        }))}
                    />
                )
            }
        >
            {editorial.content && <Markdown>{editorial.content}</Markdown>}
        </PageHeader>
        <Container className="space-y-16 lg:space-y-24">
            {editorial.contentSectionsCollection?.items &&
                editorial.contentSectionsCollection.items.length > 0 && (
                    <ContentSections
                        ctaStyle="button"
                        sections={editorial.contentSectionsCollection.items}
                    />
                )}
            {tags.length > 0 && (
                <section className="space-y-4">
                    <h2 className="text-sm font-medium text-gray-500 uppercase">Categories</h2>
                    <AllTagsList items={tags} />
                </section>
            )}
        </Container>
    </DefaultLayout>
);

export default EditorialPage;
