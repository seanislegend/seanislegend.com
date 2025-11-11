'use client';

import {useState} from 'react';
import coverImage from '../../../public/images/green-hop-zine-cover-preview.jpg';
import Image from 'next/image';
import Markdown from '@/components/Markdown';
import {Heading2} from '@/components/UI/Headings';
import NewsletterForm from './Newsletter/Form';

const GreenHopFooter = () => {
    const [showNewsletterForm, setShowNewsletterForm] = useState(false);

    return (
        <footer className="bg-accent mt-4 gap-8 rounded p-8 md:mt-8 xl:gap-16 xl:py-12">
            <div className="mx-auto flex max-w-300 flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex shrink-0 items-center justify-center sm:w-[200px] sm:py-8 md:w-[280px] xl:w-[350px]">
                    <Image
                        alt="Green Hop Zine Cover"
                        className="w-full max-w-[160px] -rotate-3 rounded shadow-lg will-change-transform md:max-w-[200px]"
                        height={1000}
                        src={coverImage}
                        width={705}
                    />
                </div>
                <div className="grow">
                    <Heading2>From Bine to Glass &mdash; Print Edition</Heading2>
                    <Markdown className="mt-4 text-pretty sm:max-w-10/12">
                        Be the first to know when the print edition launches. Including additional
                        photography and content, this will be a limited edition print run. Register
                        your interest to receive 10% off the final price when it becomes available.
                    </Markdown>
                    <div className="mt-4 sm:max-w-100">
                        <NewsletterForm />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default GreenHopFooter;
