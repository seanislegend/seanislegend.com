import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const TyntMeadowCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid>
            <Column span={6}>{renderPhoto(0)}</Column>
            <Column span={6}>
                <Grid>
                    <Column span={6}>{renderPhoto(3)}</Column>
                    <Column span={6}>{renderPhoto(2)}</Column>
                    <Column span={12}>{renderPhoto(1)}</Column>
                </Grid>
            </Column>
        </Grid>
        <Grid>
            <Column span={1} />
            <Column span={5}>{renderPhoto(4)}</Column>
            <Column span={5}>{renderPhoto(5)}</Column>
            <Column span={1} />
        </Grid>
        <Grid className="place-items-end">
            <Column span={6}>{renderPhoto(6)}</Column>
            <Column span={3}>{renderPhoto(7)}</Column>
            <Column span={3}>{renderPhoto(8)}</Column>
        </Grid>
        <Grid>
            <Column span={3}>{renderPhoto(9)}</Column>
            <Column span={3}>{renderPhoto(10)}</Column>
            <Column span={3}>{renderPhoto(11)}</Column>
            <Column span={3}>{renderPhoto(12)}</Column>
        </Grid>
        <Grid>
            <Column span={5}>
                <Grid>
                    <Column span={12}>{renderPhoto(13)}</Column>
                    <Column span={12}>{renderPhoto(15)}</Column>
                </Grid>
            </Column>
            <Column span={7}>{renderPhoto(14)}</Column>
        </Grid>
        <Grid className="mx-auto w-10/12">
            <Column span={3}>{renderPhoto(16)}</Column>
            <Column span={3}>{renderPhoto(17)}</Column>
            <Column span={3}>{renderPhoto(18)}</Column>
            <Column span={3}>{renderPhoto(19)}</Column>
        </Grid>
        <Grid>
            <Column span={2}>{renderPhoto(20)}</Column>
            <Column span={2}>{renderPhoto(21)}</Column>
            <Column span={2}>{renderPhoto(22)}</Column>
            <Column span={2}>{renderPhoto(23)}</Column>
            <Column span={2}>{renderPhoto(24)}</Column>
            <Column span={2}>{renderPhoto(25)}</Column>
        </Grid>
        <Grid className="place-items-end">
            <Column span={6}>
                <Grid>
                    <Column span={6}>{renderPhoto(26)}</Column>
                    <Column span={6}>{renderPhoto(28)}</Column>
                    <Column span={12}>{renderPhoto(27)}</Column>
                </Grid>
            </Column>
            <Column span={6}>{renderPhoto(30)}</Column>
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(29)}</Column>
            <Column span={6}>{renderPhoto(31)}</Column>
        </Grid>
    </>
);

export default TyntMeadowCustomLayout;
