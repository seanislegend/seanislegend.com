import {Tooltip} from '@base-ui-components/react/tooltip';
import ArrowSvg from './ArrowSvg';

const ShareButtonTooltip: React.FC<React.PropsWithChildren> = ({children}) => (
    <Tooltip.Portal>
        <Tooltip.Positioner sideOffset={10} side="bottom">
            <Tooltip.Popup className="flex origin-[var(--transform-origin)] flex-col rounded-md bg-[canvas] px-2 py-1 text-sm shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:duration-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                <Tooltip.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                    <ArrowSvg />
                </Tooltip.Arrow>
                {children}
            </Tooltip.Popup>
        </Tooltip.Positioner>
    </Tooltip.Portal>
);

export default ShareButtonTooltip;
