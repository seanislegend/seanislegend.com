import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const BRollCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid>
            <Column span={6}>
                <Grid>
                    <Column span={12}>{renderPhoto(1)}</Column>
                    <Column span={3}>{renderPhoto(6)}</Column>
                    <Column span={3}>{renderPhoto(2)}</Column>
                    <Column span={3}>{renderPhoto(7)}</Column>
                    <Column span={3}>{renderPhoto(8)}</Column>
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
    </>
);

export default BRollCustomLayout;
