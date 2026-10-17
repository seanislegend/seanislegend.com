import Button from '@/components/Button';
import Markdown from '@/components/Markdown';

interface Props {
    exhibition: Exhibition;
}

const ExhibitionHeader: React.FC<Props> = ({exhibition}) => (
    <>
        <div className="mb-8 md:mx-auto md:max-w-220">
            <Markdown className="text-pretty">{exhibition.description || ''}</Markdown>
        </div>
        <div className="flex flex-col gap-4 text-xs md:mx-auto md:max-w-220 md:flex-row md:gap-10">
            <div>
                {exhibition.startDate && exhibition.endDate && (
                    <dl>
                        <dt className="text-title-text mb-1 text-sm leading-tight font-semibold text-balance break-normal uppercase md:leading-tight">
                            Dates
                        </dt>
                        <dd>
                            <Markdown>
                                {`${new Date(exhibition.startDate).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })} - ${new Date(exhibition.endDate).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}`}
                            </Markdown>
                        </dd>
                    </dl>
                )}
            </div>
            {exhibition.address && (
                <dl>
                    <dt className="text-title-text mb-1 text-sm leading-tight font-semibold text-balance break-normal uppercase md:leading-tight">
                        Address
                    </dt>
                    <dd>
                        <Markdown>
                            {exhibition.addressDirectionsUrl
                                ? `[${exhibition.address}](${exhibition.addressDirectionsUrl})`
                                : exhibition.address}
                        </Markdown>
                    </dd>
                </dl>
            )}
        </div>
        {exhibition.detailsUrl && (
            <div className="mt-4 md:mx-auto md:max-w-220">
                <Button className="mt-4" href={exhibition.detailsUrl} theme="secondary">
                    {exhibition.detailsUrlLabel || 'More details'}
                </Button>
            </div>
        )}
    </>
);

export default ExhibitionHeader;
