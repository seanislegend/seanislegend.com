import DefaultHeader from './Default';
import {Props as DefaultHeaderProps} from './Default';
import GreenHopHeader from './GreenHop';

const photoCollectionHeaders: Record<
    string,
    React.FC<React.PropsWithChildren<DefaultHeaderProps>>
> = {
    default: DefaultHeader,
    greenHop: GreenHopHeader
};

export default photoCollectionHeaders;
