import Link from 'next/link';
import {getExternalUrl} from '@/utils/helpers';

interface Props {
    photo: Photo;
}

const CarouselExternalLink: React.FC<Props> = ({photo}) => {
    if (!photo?.url) return null;

    return (
        <Link
            href={getExternalUrl(photo.url)}
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-wide text-[var(--dimmed-text)] decoration-2 underline-offset-2 hover:text-[var(--link-text)] hover:underline focus:outline-dotted focus:outline-2 focus:outline-offset-2 focus:outline-[var(--link-text)]"
        >
            <span>{photo.urlLabel || photo.url}</span>
        </Link>
    );
};

export default CarouselExternalLink;
