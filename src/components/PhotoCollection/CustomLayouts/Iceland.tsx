import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const IcelandCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid className="place-items-start">
            <Column span={4}>{renderPhoto(0)}</Column>
            <Column span={4}>{renderPhoto(3)}</Column>
            <Column span={4}>{renderPhoto(4)}</Column>
        </Grid>
        <Grid>
            <Column span={1} />
            <Column span={5}>{renderPhoto(1)}</Column>
            <Column span={5}>{renderPhoto(2)}</Column>
            <Column span={1} />
        </Grid>
        <Grid className="place-items-end">
            <Column span={6}>{renderPhoto(10)}</Column>
            <Column span={6}>
                <Grid>
                    <Column span={6}>{renderPhoto(6)}</Column>
                    <Column span={6}>{renderPhoto(7)}</Column>
                    <Column span={12}>{renderPhoto(8)}</Column>
                    <Column span={12}>{renderPhoto(9)}</Column>
                </Grid>
            </Column>
        </Grid>
        <Grid className="px-20">
            <Column span={4}>{renderPhoto(20)}</Column>
            <Column span={4}>{renderPhoto(11)}</Column>
            <Column span={4}>{renderPhoto(21)}</Column>
        </Grid>
        <Grid>
            <Column span={4}>{renderPhoto(15)}</Column>
            <Column span={4}>{renderPhoto(17)}</Column>
            <Column span={4}>{renderPhoto(16)}</Column>
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(12)}</Column>
            <Column className="h-full" span={6}>
                <div className="flex h-full flex-col justify-between">
                    {renderPhoto(13)}
                    {renderPhoto(14)}
                </div>
            </Column>
        </Grid>
        <Grid>
            <Column span={3}>{renderPhoto(18)}</Column>
            <Column span={3}>{renderPhoto(19)}</Column>
            <Column span={3}>{renderPhoto(22)}</Column>
            <Column span={3}>{renderPhoto(24)}</Column>
        </Grid>
    </>
);

export default IcelandCustomLayout;
