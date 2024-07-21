import Image from 'next/image';
import { FC, memo } from 'react';

import { NPProjectItems, SectionId } from '../../data/data';
import Section from '../Layout/Section';

//import { Document } from 'react-pdf';

const NPContent: FC = memo(() => {
    return (
        <Section className="bg-neutral-800" sectionId={SectionId.Skills}>
            <h2 className="text-center text-xl font-bold text-white mb-6 -translate-y-6">NP vs P Project</h2>
            <div className="text-white">
                <p>My full paper on the P vs NP space discussing the problem set aswell as my implementation and approach to efficiently solving the Traveling Salesman Problem (TSP) can be found <a className="underline underline-offset-4 hover:text-red-500" href="TSP%20Paper.pdf">here.</a></p>
            </div>

            <div className=" w-full">
                {NPProjectItems.map((item, index) => {
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
            <iframe src="https://tyler-conger.com/TSP%20Paper.pdf" width="100%" height="500px" /> 
        </Section>
    );
});

NPContent.displayName = 'Kart Content';
export default NPContent;
