import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const HomeCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid>
            <Column span={6}>
                <Grid>
                    <Column span={12}>{renderPhoto(0)}</Column>
                    <Column span={6}>{renderPhoto(5)}</Column>
                    <Column span={6}>{renderPhoto(4)}</Column>
                </Grid>
            </Column>
            <Column span={6}>
                <Grid>
                    <Column span={6}>{renderPhoto(1)}</Column>
                    <Column span={6}>{renderPhoto(2)}</Column>
                    <Column span={12}>{renderPhoto(3)}</Column>
                </Grid>
            </Column>
        </Grid>
        <Grid>
            <Column span={3}>{renderPhoto(6)}</Column>
            <Column span={3}>{renderPhoto(8)}</Column>
            <Column span={3}>{renderPhoto(7)}</Column>
            <Column span={3}>{renderPhoto(9)}</Column>
        </Grid>
        <Grid>
            <Column span={4}>{renderPhoto(10)}</Column>
            <Column span={4}>{renderPhoto(11)}</Column>
            <Column span={4}>{renderPhoto(13)}</Column>
        </Grid>
        <Grid>
            <Column span={3}>{renderPhoto(12)}</Column>
            <Column span={3}>{renderPhoto(17)}</Column>
            <Column span={3}>{renderPhoto(15)}</Column>
            <Column span={3}>{renderPhoto(16)}</Column>
        </Grid>
    </>
);

export default HomeCustomLayout;
