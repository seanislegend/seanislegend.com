import Button from '@/components/Button';
import DefaultLayout from '@/components/Layouts/Default';
import PageHeader from '@/components/PageHeader';

const NotFound = () => (
    <DefaultLayout theme="light">
        <PageHeader title="Not found">
            <p>Could not find requested resource</p>
            <Button className="mt-4" href="/">
                Go to home
            </Button>
        </PageHeader>
    </DefaultLayout>
);

export default NotFound;
