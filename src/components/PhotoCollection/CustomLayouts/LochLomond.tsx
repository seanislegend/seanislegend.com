import Column from '../Column';
import Grid from '../Grid';
import {type CustomLayoutProps} from '../index';

const LochLomondCustomLayout: React.FC<CustomLayoutProps> = ({renderPhoto}) => (
    <>
        <Grid>
            <Column span={8}>{renderPhoto(0)}</Column>
            <Column className="h-full" span={4}>
                <div className="flex h-full flex-col justify-between">
                    {renderPhoto(1)}
                    {renderPhoto(2)}
                </div>
            </Column>
        </Grid>
        <Grid>
            <Column span={6}>{renderPhoto(3)}</Column>
            <Column span={6}>{renderPhoto(4)}</Column>
        </Grid>
    </>
);

export default LochLomondCustomLayout;
