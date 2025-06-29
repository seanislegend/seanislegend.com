import Button from '@/components/Button';

interface Props {
    id: string;
}

const PhotoEditButton: React.FC<Props> = ({id}) => {
    if (process.env.NEXT_PUBLIC_ADMIN_TOOLS !== '1') return null;
    return (
        <Button
            className="absolute z-50 -mt-11 ml-2"
            href={`https://app.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/entries/${id}`}
        >
            Edit
        </Button>
    );
};

export default PhotoEditButton;
