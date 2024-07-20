import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import { isMobile } from '../../config';
import { kartProjectItems, SectionId } from '../../data/data';
import { KartItem } from '../../data/dataDef';
import Section from '../Layout/Section';

const KartContent: FC = memo(() => {
    return (
        <Section className="bg-neutral-800" sectionId={SectionId.Skills}>
            <h2 className="text-center text-xl font-bold text-white mb-6 -translate-y-10">Autonomous Kart Project</h2>


            <div className=" w-full">
                {kartProjectItems.map((item, index) => {
                    const { title, description, image } = item;
                    return (
                        <div className="grid grid-cols-2 gap-4 my-4" key={`${title}-${index}`}>
                            <div>                    
                                <h3 className="self-center text-l font-bold text-white">{title}</h3>
                                <p className="self-center text-s text-white">{description}</p>
                            </div>
                            <div>
                                <Image alt={title} className="rounded-md" placeholder="blur" src={image} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
});

KartContent.displayName = 'Kart Content';
export default KartContent;
