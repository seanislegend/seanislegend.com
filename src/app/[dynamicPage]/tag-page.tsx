import {ContentSection} from '@/components/PhotoCollection/Blocks';
import PhotoMasonry from '@/components/PhotoCollection/Masonry';
import AllTagsList from '@/components/SiteMenu/AllTagsList';
import Container from '@/components/UI/Container';
import {fetchAllPhotosForTag, fetchAllTags} from '@/utils/contentful';

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

interface Props {
    tagSlug: string;
}

const TagPage: React.FC<Props> = async ({tagSlug}) => {
    const [allTags, {contentSection, photos, tag}] = await Promise.all([
        fetchAllTags(),
        fetchAllPhotosForTag(tagSlug)
    ]);

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
