import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const HukinsHopsCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <div className="mx-4 space-y-10 md:mx-8">
        <Grid>
            <Column span={4}>{renderPhoto(1)}</Column>
            <Column span={4}>{renderPhoto(8)}</Column>
            <Column span={4}>{renderPhoto(32)}</Column>
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(4)}</Column>
            <Column span={6}>{renderPhoto(10)}</Column>
        </Grid>
        <Grid>
            <Column span={2} />
            <Column span={8}>{renderPhoto(0)}</Column>
            <Column span={2} />
        </Grid>
        <Grid>
            <Column span={4}>{renderPhoto(3)}</Column>
            <Column span={4}>{renderPhoto(9)}</Column>
            <Column span={4}>{renderPhoto(7)}</Column>
        </Grid>
        <Grid>
            <Column span={4}>{renderPhoto(29)}</Column>
            <Column span={4}>{renderPhoto(28)}</Column>
            <Column span={4}>{renderPhoto(2)}</Column>
        </Grid>
        <Grid>
            <Column span={0.5} />
            <Column className="self-center" span={4}>
                {renderPhoto(5)}
            </Column>
            <Column span={0.5} />
            <Column span={1} />
            <Column span={5}>{renderPhoto(6)}</Column>
            <Column span={1} />
        </Grid>
        <Grid gridGap="gap-4">
            <Column span={3}>{renderPhoto(10)}</Column>
            <Column span={3}>{renderPhoto(12)}</Column>
            <Column span={3}>{renderPhoto(11)}</Column>
            <Column span={3}>{renderPhoto(13)}</Column>
        </Grid>
        <Grid className="place-items-center">
            <Column span={3}>{renderPhoto(19)}</Column>
            <Column span={3}>{renderPhoto(25)}</Column>
            <Column span={1} />
            <Column className="translate-x-[-5rem]" span={5}>
                {renderPhoto(18)}
            </Column>
        </Grid>
        <Grid gridGap="gap-4">
            <Column span={3}>{renderPhoto(14)}</Column>
            <Column span={3}>{renderPhoto(15)}</Column>
            <Column span={3}>{renderPhoto(16)}</Column>
            <Column span={3}>{renderPhoto(17)}</Column>
        </Grid>
        <Grid gridGap="gap-4">
            <Column span={1} />
            <Column span={4}>{renderPhoto(26)}</Column>
            <Column span={1} />
            <Column span={1} />
            <Column span={4}>{renderPhoto(27)}</Column>
            <Column span={1} />
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(24)}</Column>
            <Column className="flex h-full flex-col justify-between" span={6}>
                <Grid gridCols="grid-cols-12" gridGap="gap-4">
                    <Column span={6}>{renderPhoto(30)}</Column>
                    <Column span={6}>{renderPhoto(20)}</Column>
                </Grid>
                <Grid gridCols="grid-cols-12" gridGap="gap-4">
                    <Column span={12}>{renderPhoto(21)}</Column>
                </Grid>
                <Grid gridCols="grid-cols-12" gridGap="gap-4">
                    <Column span={6}>{renderPhoto(31)}</Column>
                    <Column span={6}>{renderPhoto(23)}</Column>
                </Grid>
            </Column>
        </Grid>
    </div>
);

export default HukinsHopsCustomLayout;
