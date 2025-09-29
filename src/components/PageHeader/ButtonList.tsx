import Button from '@/components/Button';
import ButtonList from '@/components/Button/List';
import {getExternalUrl} from '@/utils/helpers';

interface Props {
    ctas: {
        label: string;
        url: string;
    }[];
}

const PageHeaderButtonList: React.FC<Props> = ({ctas}) => (
    <ButtonList className="mt-6 print:hidden">
        {ctas.map((cta, index) => (
            <Button
                key={cta.label}
                href={getExternalUrl(cta.url)}
                theme={index === 0 ? 'primary' : 'secondary'}
            >
                {cta.label}
            </Button>
        ))}
    </ButtonList>
);

export default PageHeaderButtonList;
