import dynamic from 'next/dynamic';


import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import KartContent from '../components/Sections/KartContent';

//import KartImageCatalog from '../components/Sections/KartImageCatalog';

import { homePageMeta } from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

export default function about() {
    const { description } = homePageMeta;
    const title = "Kart - ".concat(homePageMeta.title);
    return (
        
        <Page description={description} title={title}>
            <Header />
            <div className="project-page">
                <KartContent />
            </div>
            <Footer />
        </Page>
    )
}