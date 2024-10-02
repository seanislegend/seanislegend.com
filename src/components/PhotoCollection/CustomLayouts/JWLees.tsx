import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const JWLeesCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid>
            <Column span={8}>{renderPhoto(5)}</Column>
            <Column className="h-full" span={4}>
                <div className="flex h-full flex-col justify-between">
                    {renderPhoto(1)}
                    {renderPhoto(0)}
                </div>
            </Column>
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(3)}</Column>
            <Column span={6}>{renderPhoto(4)}</Column>
        </Grid>
        <Grid className="px-20">
            <Column span={4}>{renderPhoto(14)}</Column>
            <Column span={4}>{renderPhoto(19)}</Column>
            <Column span={4}>{renderPhoto(16)}</Column>
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(17)}</Column>
            <Column span={6}>{renderPhoto(18)}</Column>
        </Grid>
        <Grid className="px-20">
            <Column span={4}>{renderPhoto(9)}</Column>
            <Column span={4}>{renderPhoto(10)}</Column>
            <Column span={4}>{renderPhoto(11)}</Column>
        </Grid>
        <Grid>
            <Column className="h-full" span={4}>
                <div className="flex h-full flex-col justify-between">
                    {renderPhoto(12)}
                    {renderPhoto(20)}
                </div>
            </Column>
            <Column span={8}>{renderPhoto(13)}</Column>
        </Grid>
        <Grid className="px-20">
            <Column span={4}>{renderPhoto(8)}</Column>
            <Column span={4}>{renderPhoto(6)}</Column>
            <Column span={4}>{renderPhoto(7)}</Column>
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(2)}</Column>
            <Column span={6}>{renderPhoto(23)}</Column>
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(21)}</Column>
            <Column span={6}>{renderPhoto(22)}</Column>
        </Grid>
    </>
);

export default JWLeesCustomLayout;
