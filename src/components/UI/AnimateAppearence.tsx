import {type Easing, type HTMLMotionProps} from 'motion/react';
import * as m from 'motion/react-m';

interface Props extends HTMLMotionProps<'div'> {
    delay?: number;
    duration?: number;
    ease?: Easing;
    initialX?: number;
    initialY?: number;
}

const AnimateAppearence: React.FC<React.PropsWithChildren<Props>> = ({
    children,
    delay = 0,
    duration = 0.5,
    ease = [0, 0.71, 0.2, 1.01],
    initialX = 0,
    initialY = 10,
    ...props
}) => {
    return (
        <m.div
            initial={{opacity: 0, x: initialX, y: initialY}}
            transition={{delay, duration, ease}}
            viewport={{margin: '0px -20px 0px 100px', once: true}}
            whileInView={{opacity: 1, x: 0, y: 0}}
            {...props}
        >
            {children}
        </m.div>
    );
};

export default AnimateAppearence;
