'use client';

import LinkCard from '@/components/LinksList/Card';
import {motion} from 'framer-motion';

interface Props {
    links: LinksPage['linksCollection']['items'];
}

const LinksList: React.FC<Props> = ({links}: Props) => (
    <motion.div
        initial={{opacity: 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 10}}
        transition={{type: 'spring', delay: 0.1, duration: 1.5, velocity: 1}}
    >
        <div className="divide-y divide-gray-200">
            {links.map((link: Props['links'][0]) => (
                <LinkCard key={link.title} {...link} />
            ))}
        </div>
    </motion.div>
);

export default LinksList;
