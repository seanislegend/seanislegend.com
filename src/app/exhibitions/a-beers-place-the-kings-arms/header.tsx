import Markdown from '@/components/Markdown';
import {Heading4} from '@/components/UI/Headings';

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
                    <div>
                        <Heading4>Dates</Heading4>
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
                    </div>
                )}
            </div>
            {exhibition.address && (
                <div>
                    <Heading4>Address</Heading4>
                    <Markdown>
                        {exhibition.addressDirectionsUrl
                            ? `[${exhibition.address}](${exhibition.addressDirectionsUrl})`
                            : exhibition.address}
                    </Markdown>
                </div>
            )}
        </div>
    </>
);

export default ExhibitionHeader;
