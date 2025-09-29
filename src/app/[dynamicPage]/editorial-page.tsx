import DefaultLayout from '@/components/Layouts/Default';
import Markdown from '@/components/Markdown';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/UI/Container';
import ContentSections from '@/app/services/ContentSection';
import PhotosGrid from '@/app/services/PhotosGrid';

interface Props {
    editorial: Editorial;
}

const EditorialPage: React.FC<Props> = ({editorial}) => (
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
            {editorial.contentSectionsCollection?.items?.map((section, index) => (
                <ContentSections key={section.id || index} ctaStyle="button" sections={[section]} />
            ))}
        </Container>
    </DefaultLayout>
);

export default EditorialPage;
