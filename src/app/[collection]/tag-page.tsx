import {ContentSection} from '@/components/PhotoCollection/Blocks';
import PhotoMasonry from '@/components/PhotoCollection/Masonry';
import AllTagsList from '@/components/SiteMenu/AllTagsList';
import Container from '@/components/UI/Container';
import {fetchAllPhotosForTag, fetchAllTags} from '@/utils/contentful';

interface Props {
    tagSlug: string;
}

const TagPage = async ({tagSlug}: Props) => {
    const allTags = await fetchAllTags();
    const {contentSection, photos, tag} = await fetchAllPhotosForTag(tagSlug);

    if (!photos?.length || !tag) {
        return null;
    }

    return (
        <>
            <PhotoMasonry items={photos} />
            <Container className="my-10 space-y-10 lg:my-20">
                {contentSection && <ContentSection {...contentSection} />}
                {allTags?.length > 0 && <AllTagsList items={allTags} />}
            </Container>
        </>
    );
};

export default TagPage;
