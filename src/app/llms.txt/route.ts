import {NextResponse} from 'next/server';
import {
    fetchAllEditorialPages,
    fetchAllTags,
    fetchCollectionsForSitemap
} from '@/utils/contentful';
import {SITE_LINKS, SHOP_URL} from '@/utils/config';

const BASE = process.env.NEXT_PUBLIC_URL || 'https://www.seanislegend.com';

export const revalidate = 3600;

const staticBody = `# Sean McEmerson Photography

> London-based photographer specialising in beer, brewery, editorial and event photography. I capture the stories of UK beer, breweries and the people behind them, plus street, travel and everyday life.

## Contact

- Website: ${BASE}
- Contact: ${BASE}/contact
- Instagram: ${SITE_LINKS.find(l => l.label === 'Instagram')?.url ?? ''}
- X: ${SITE_LINKS.find(l => l.label === 'X')?.url ?? ''}
- Threads: ${SITE_LINKS.find(l => l.label === 'Threads')?.url ?? ''}
- Bluesky: ${SITE_LINKS.find(l => l.label === 'Bluesky')?.url ?? ''}

## Services

- **Beer & brewery photography** — documentary coverage of brewing process, staff, venues and branding
- **Pub & bar photography** — candid location shoots of taprooms, bars and pubs
- **Event photography** — coverage of public or private beer events
- **Editorial photography** — visual storytelling for print or online
- **Long-form documentary** — extended photographic essays and time-based storytelling
- **Portraits & people** — on-location editorial portraits of brewers, pub owners and industry professionals

## Key links

- Home: ${BASE}
- Collections: ${BASE}/collections
- About: ${BASE}/about
- Exhibitions: ${BASE}/exhibitions
- Hire me: ${BASE}/services
- Shop: ${SHOP_URL}
- Sitemap: ${BASE}/sitemap.xml
`;

export async function GET() {
    const [collections, tags, editorialPages] = await Promise.all([
        fetchCollectionsForSitemap(),
        fetchAllTags(),
        fetchAllEditorialPages()
    ]);

    const filteredCollections =
        collections?.filter(
            (c: {photosCollection?: {items?: unknown[]}}) =>
                (c.photosCollection?.items?.length ?? 0) > 0
        ) ?? [];

    const collectionLines = filteredCollections
        .map(
            (c: {slug: string; title?: string}) =>
                `- ${c.title ?? c.slug}: ${BASE}/${c.slug === 'home' ? '' : c.slug}`
        )
        .join('\n');

    const tagLines =
        tags
            ?.map(
                (t: {name: string; slug: string}) =>
                    `- ${t.name}: ${BASE}/${t.slug}-photography`
            )
            .join('\n') ?? '';

    const editorialLines =
        editorialPages
            ?.map(
                (e: {pageTitle?: string; title?: string; slug: string}) =>
                    `- ${e.pageTitle ?? e.title ?? e.slug}: ${BASE}/${e.slug}`
            )
            .join('\n') ?? '';

    const body = [
        staticBody,
        '',
        '## Collections (citable)',
        '',
        collectionLines,
        '',
        '## Tags (citable)',
        '',
        tagLines,
        '',
        '## Editorial & pages (citable)',
        '',
        editorialLines
    ].join('\n');

    return new NextResponse(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate'
        }
    });
}
