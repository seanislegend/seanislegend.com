import Button from '@/components/Button';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';

const NotFound = () => (
    <DefaultLayout theme="light">
        <PageHeader title="Not found">
            <p>
                Sorry, the page you are looking for does not exist. If you&apos;re looking for a
                photo or collection, look through the links below.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
                <Button className="mt-4" href="/collections">
                    View all collections
                </Button>
                <Button className="mt-4" href="/tags" theme="secondary">
                    View all tags
                </Button>
            </div>
        </PageHeader>
    </DefaultLayout>
);

export default NotFound;
