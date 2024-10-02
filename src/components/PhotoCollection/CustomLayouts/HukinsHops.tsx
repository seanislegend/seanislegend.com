import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const HukinsHopsCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid>
            <Column span={8}>{renderPhoto(0)}</Column>
            <Column className="h-full" span={4}>
                <div className="flex h-full flex-col justify-between">
                    {renderPhoto(1)}
                    {renderPhoto(8)}
                </div>
            </Column>
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(4)}</Column>
            <Column span={6}>{renderPhoto(10)}</Column>
        </Grid>
        <Grid>
            <Column span={4}>{renderPhoto(3)}</Column>
            <Column span={4}>{renderPhoto(9)}</Column>
            <Column span={4}>{renderPhoto(7)}</Column>
            <Column span={4}>{renderPhoto(29)}</Column>
            <Column span={4}>{renderPhoto(28)}</Column>
            <Column span={4}>{renderPhoto(2)}</Column>
        </Grid>
        <Grid>
            <Column span={1} />
            <Column span={5}>{renderPhoto(5)}</Column>
            <Column span={5}>{renderPhoto(6)}</Column>
            <Column span={1} />
        </Grid>
        <Grid>
            <Column span={3}>{renderPhoto(10)}</Column>
            <Column span={3}>{renderPhoto(12)}</Column>
            <Column span={3}>{renderPhoto(11)}</Column>
            <Column span={3}>{renderPhoto(13)}</Column>
        </Grid>
        <Grid className="place-items-center">
            <Column span={3}>{renderPhoto(19)}</Column>
            <Column span={3}>{renderPhoto(25)}</Column>
            <Column span={6}>
                <div className="mx-auto flex w-full max-w-[80%] items-center justify-center">
                    {renderPhoto(18)}
                </div>
            </Column>
        </Grid>
        <Grid>
            <Column span={3}>{renderPhoto(14)}</Column>
            <Column span={3}>{renderPhoto(15)}</Column>
            <Column span={3}>{renderPhoto(16)}</Column>
            <Column span={3}>{renderPhoto(17)}</Column>
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(24)}</Column>
            <Column className="flex h-full flex-col justify-between" span={6}>
                <Grid gridCols="grid-cols-12">
                    <Column span={6}>{renderPhoto(30)}</Column>
                    <Column span={6}>{renderPhoto(20)}</Column>
                </Grid>
                <Grid gridCols="grid-cols-12">
                    <Column span={12}>{renderPhoto(21)}</Column>
                </Grid>
                <Grid gridCols="grid-cols-12">
                    <Column span={6}>{renderPhoto(31)}</Column>
                    <Column span={6}>{renderPhoto(23)}</Column>
                </Grid>
            </Column>
        </Grid>
    </>
);

export default HukinsHopsCustomLayout;
