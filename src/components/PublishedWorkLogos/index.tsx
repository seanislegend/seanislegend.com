import Image from 'next/image';
import gbhLogo from '@/../public/images/logos/good-beer-hunting.png';
import pellicleLogo from '@/../public/images/logos/pellicle.png';

const PublishedWorkLogos: React.FC = () => (
    <div data-testid="published-work-logos">
        <h2 className="font-medium uppercase underline-offset-4 group-hover:underline lg:block">
            Published in
        </h2>
        <div className="mt-4 flex flex-row flex-wrap gap-x-8 gap-y-4">
            <a
                className="transition-opacity duration-300 ease-in-out hover:opacity-80"
                href="https://www.goodbeerhunting.com?utm_source=seanislegend.com&utm_medium=referral"
                rel="noreferrer"
                target="_blank"
                title="Good Beer Hunting"
            >
                <Image src={gbhLogo} alt="Good Beer Hunting" width={75} height={85} />
            </a>
            <a
                className="transition-opacity duration-300 ease-in-out hover:opacity-80"
                href="https://www.pelliclemag.com?utm_source=seanislegend.com&utm_medium=referral"
                rel="noreferrer"
                target="_blank"
                title="Pellicle"
            >
                <Image src={pellicleLogo} alt="Pellicle" width={168} height={85} />
            </a>
        </div>
    </div>
);

export default PublishedWorkLogos;
