'use client';

import {MotionConfig} from 'motion/react';

interface Props {
    children: React.ReactNode;
}

const MotionConfigProvider: React.FC<Props> = ({children}) => (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionConfigProvider;
