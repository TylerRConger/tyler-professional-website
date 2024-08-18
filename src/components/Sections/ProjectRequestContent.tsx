
import { FC, memo } from 'react';

import { SectionId } from '../../data/data';
import Section from '../Layout/Section';

//import { Document } from 'react-pdf';

const ProjRequestContent: FC = memo(() => {
    return (
        <Section className="bg-neutral-800 h-max" sectionId={SectionId.Skills}>
            <h2 className="text-center text-xl font-bold text-white mb-6 -translate-y-6">Project Unavailable</h2>
            <div className="text-white px-10">
                <p>&emsp;&emsp;The project you  requested for a variety of potential reasons, including it was expensive to host or contains information I cannot release publicly. Nonetheless, email me at <a className="underline underline-offset-4 text-red-400" href='mailto:Tyler-Conger@Tyler-Conger.com'>Tyler-Conger@Tyler-Conger.com</a> and I would be happy to release these projects to you. In the meantime here's a Party Parrot</p>
            </div>
            {/* Just use the img tag right now, consider updating to not reference outside website as this will break at some point*/}
            <div className="flex justify-center pt-10" >
                <img src="https://media.tenor.com/rpQaVZEqC-QAAAAi/parrot.gif" alt="Party Parrot"></img>
            </div>
        </Section>
    );
});

ProjRequestContent.displayName = 'Project Request Content';
export default ProjRequestContent;
