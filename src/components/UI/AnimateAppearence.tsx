import {type Easing, type HTMLMotionProps} from 'motion/react';
import * as m from 'motion/react-m';

interface Props extends HTMLMotionProps<'div'> {
<<<<<<< HEAD
    as?: keyof typeof m;
=======
>>>>>>> 9b7c06c (feat: Add animated entrance for blocks)
    delay?: number;
    duration?: number;
    ease?: Easing;
    initialX?: number;
    initialY?: number;
}

const AnimateAppearence: React.FC<React.PropsWithChildren<Props>> = ({
<<<<<<< HEAD
    as = 'div',
=======
>>>>>>> 9b7c06c (feat: Add animated entrance for blocks)
    children,
    delay = 0,
    duration = 0.5,
    ease = [0, 0.71, 0.2, 1.01],
    initialX = 0,
    initialY = 10,
    ...props
}) => {
<<<<<<< HEAD
    const Component = m[as] as React.ComponentType<HTMLMotionProps<'div'>>;

    return (
        <Component
            initial={{opacity: 0, x: initialX, y: initialY}}
            transition={{delay, duration, ease}}
            viewport={{margin: '0px -20px 0px 100px', once: true}}
=======
    return (
        <m.div
            initial={{opacity: 0, x: initialX, y: initialY}}
            transition={{delay, duration, ease}}
            viewport={{once: true}}
>>>>>>> 9b7c06c (feat: Add animated entrance for blocks)
            whileInView={{opacity: 1, x: 0, y: 0}}
            {...props}
        >
            {children}
<<<<<<< HEAD
        </Component>
=======
        </m.div>
>>>>>>> 9b7c06c (feat: Add animated entrance for blocks)
    );
};

export default AnimateAppearence;
