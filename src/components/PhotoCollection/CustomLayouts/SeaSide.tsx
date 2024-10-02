import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const SeaSideCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid>
            <Column className="h-full" span={4}>
                <div className="flex h-full flex-col justify-between">
                    {renderPhoto(1)}
                    {renderPhoto(2)}
                </div>
            </Column>
            <Column span={8}>{renderPhoto(0)}</Column>
        </Grid>
        <Grid>
            <Column span={3}>{renderPhoto(6)}</Column>
            <Column span={3}>{renderPhoto(7)}</Column>
            <Column span={3}>{renderPhoto(8)}</Column>
            <Column span={3}>{renderPhoto(9)}</Column>
        </Grid>
        <Grid>
            <Column span={4}>{renderPhoto(3)}</Column>
            <Column span={4}>{renderPhoto(4)}</Column>
            <Column span={4}>{renderPhoto(5)}</Column>
        </Grid>
    </>
);

export default SeaSideCustomLayout;
