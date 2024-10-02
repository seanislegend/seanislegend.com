import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const PortoCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid>
            <Column className="h-full" span={4}>
                <div className="flex h-full flex-col justify-between">
                    {renderPhoto(3)}
                    {renderPhoto(2)}
                </div>
            </Column>
            <Column span={8}>{renderPhoto(0)}</Column>
        </Grid>
        <Grid>
            <Column span={1} />
            <Column span={5}>{renderPhoto(4)}</Column>
            <Column span={5}>{renderPhoto(5)}</Column>
            <Column span={1} />
        </Grid>
        <Grid>
            <Column span={3}>{renderPhoto(6)}</Column>
            <Column span={3}>{renderPhoto(7)}</Column>
            <Column span={3}>{renderPhoto(8)}</Column>
            <Column span={3}>{renderPhoto(9)}</Column>
        </Grid>
        <Grid className="mx-auto">
            <Column className="self-end" span={4}>
                {renderPhoto(11)}
            </Column>
            <Column span={4}>{renderPhoto(13)}</Column>
            <Column span={4}>{renderPhoto(12)}</Column>
        </Grid>
        <Grid>
            <Column span={3}>{renderPhoto(15)}</Column>
            <Column span={3}>{renderPhoto(16)}</Column>
            <Column span={3}>{renderPhoto(19)}</Column>
            <Column span={3}>{renderPhoto(20)}</Column>
        </Grid>
        <Grid className="px-20">
            <Column span={4}>{renderPhoto(14)}</Column>
            <Column span={4}>{renderPhoto(18)}</Column>
            <Column span={4}>{renderPhoto(17)}</Column>
        </Grid>
        <Grid>
            <Column span={6}>
                <Grid>
                    <Column span={12}>{renderPhoto(22)}</Column>
                    <Column span={6}>{renderPhoto(25)}</Column>
                    <Column span={6}>{renderPhoto(27)}</Column>
                </Grid>
            </Column>
            <Column span={6}>
                <Grid>
                    <Column span={6}>{renderPhoto(21)}</Column>
                    <Column span={6}>{renderPhoto(23)}</Column>
                    <Column span={12}>{renderPhoto(24)}</Column>
                </Grid>
            </Column>
        </Grid>
    </>
);

export default PortoCustomLayout;
