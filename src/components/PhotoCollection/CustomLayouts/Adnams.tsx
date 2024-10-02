import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const AdnamsCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid>
            <Column span={6}>
                <Grid>
                    <Column span={12}>{renderPhoto(0)}</Column>
                    <Column span={6}>{renderPhoto(1)}</Column>
                    <Column span={6}>{renderPhoto(2)}</Column>
                </Grid>
            </Column>
            <Column span={6}>
                <Grid>
                    <Column span={6}>{renderPhoto(3)}</Column>
                    <Column span={6}>{renderPhoto(4)}</Column>
                    <Column span={12}>{renderPhoto(5)}</Column>
                </Grid>
            </Column>
        </Grid>
        <Grid className="mx-auto">
            <Column span={4}>{renderPhoto(11)}</Column>
            <Column span={4}>{renderPhoto(6)}</Column>
            <Column className="self-end" span={4}>
                {renderPhoto(12)}
            </Column>
        </Grid>
        <Grid>
            <Column span={4}>{renderPhoto(9)}</Column>
            <Column span={4}>{renderPhoto(14)}</Column>
            <Column span={4}>{renderPhoto(13)}</Column>
        </Grid>
    </>
);

export default AdnamsCustomLayout;
