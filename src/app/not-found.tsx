import Button from '@/components/Button';
import ButtonList from '@/components/Button/List';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';

const NotFound = () => (
    <DefaultLayout theme="light">
        <PageHeader title="Not found">
            <p>
                Sorry, the page you are looking for does not exist. If you&apos;re looking for a
                photo or collection, look through the links below.
            </p>
            <ButtonList>
                <Button href="/collections">View all collections</Button>
                <Button href="/tags" theme="secondary">
                    View all tags
                </Button>
            </ButtonList>
        </PageHeader>
    </DefaultLayout>
);

export default NotFound;
