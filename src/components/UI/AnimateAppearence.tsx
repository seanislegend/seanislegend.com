import {type Easing, type HTMLMotionProps} from 'motion/react';
import * as m from 'motion/react-m';

interface Props extends HTMLMotionProps<'div'> {
<<<<<<< HEAD
<<<<<<< HEAD
    as?: keyof typeof m;
=======
>>>>>>> 9b7c06c (feat: Add animated entrance for blocks)
=======
    as?: keyof typeof m;
>>>>>>> c1b1bb9 (feat: Allow different elements for animations)
    delay?: number;
    duration?: number;
    ease?: Easing;
    initialX?: number;
    initialY?: number;
}

const AnimateAppearence: React.FC<React.PropsWithChildren<Props>> = ({
<<<<<<< HEAD
<<<<<<< HEAD
    as = 'div',
=======
>>>>>>> 9b7c06c (feat: Add animated entrance for blocks)
=======
    as = 'div',
>>>>>>> c1b1bb9 (feat: Allow different elements for animations)
    children,
    delay = 0,
    duration = 0.5,
    ease = [0, 0.71, 0.2, 1.01],
    initialX = 0,
    initialY = 10,
    ...props
}) => {
<<<<<<< HEAD
<<<<<<< HEAD
    const Component = m[as] as React.ComponentType<HTMLMotionProps<'div'>>;

    return (
        <Component
            initial={{opacity: 0, x: initialX, y: initialY}}
            transition={{delay, duration, ease}}
            viewport={{margin: '0px -20px 0px 100px', once: true}}
=======
=======
    const Component = m[as] as React.ComponentType<HTMLMotionProps<'div'>>;

>>>>>>> c1b1bb9 (feat: Allow different elements for animations)
    return (
        <Component
            initial={{opacity: 0, x: initialX, y: initialY}}
            transition={{delay, duration, ease}}
<<<<<<< HEAD
            viewport={{once: true}}
>>>>>>> 9b7c06c (feat: Add animated entrance for blocks)
=======
            viewport={{margin: '0px -20px 0px 100px', once: true}}
>>>>>>> cc2a8e5 (feat: UI tweaks)
            whileInView={{opacity: 1, x: 0, y: 0}}
            {...props}
        >
            {children}
<<<<<<< HEAD
<<<<<<< HEAD
        </Component>
=======
        </m.div>
>>>>>>> 9b7c06c (feat: Add animated entrance for blocks)
=======
        </Component>
>>>>>>> c1b1bb9 (feat: Allow different elements for animations)
    );
};

export default AnimateAppearence;
