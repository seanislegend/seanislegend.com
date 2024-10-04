import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const PrizeOldAleCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid>
            <Column span={6}>{renderPhoto(0)}</Column>
            <Column span={6}>
                <Grid>
                    <Column span={6}>{renderPhoto(3)}</Column>
                    <Column span={6}>{renderPhoto(2)}</Column>
                    <Column span={12}>{renderPhoto(10)}</Column>
                </Grid>
            </Column>
        </Grid>
        <Grid className="px-20">
            <Column span={1} />
            <Column span={5}>{renderPhoto(9)}</Column>
            <Column span={5}>{renderPhoto(14)}</Column>
            <Column span={1} />
        </Grid>
        <Grid>
            <Column span={4}>{renderPhoto(7)}</Column>
            <Column span={4}>{renderPhoto(5)}</Column>
            <Column span={4}>{renderPhoto(4)}</Column>
        </Grid>
        <Grid className="mx-auto">
            <Column span={4}>{renderPhoto(11)}</Column>
            <Column span={4}>{renderPhoto(6)}</Column>
            <Column className="self-end" span={4}>
                {renderPhoto(12)}
            </Column>
        </Grid>
    </>
);

export default PrizeOldAleCustomLayout;
