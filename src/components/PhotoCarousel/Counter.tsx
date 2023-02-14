'use client';

import {motion} from 'framer-motion';

interface Props {
    activeIndex: number;
    total: number;
}

const CarouselCounter: React.FC<Props> = ({activeIndex, total}) => (
    <div className="flex items-center space-x-1 font-serif text-sm text-black dark:text-white">
        <motion.span
            key={activeIndex}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
            className="text-sm"
        >
            {activeIndex + 1}
        </motion.span>
        <span className="text-xs text-gray-600 dark:text-gray-400">of</span>
        <span className="text-sm">{total}</span>
    </div>
);

export default CarouselCounter;
