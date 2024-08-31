import dynamic from 'next/dynamic';


import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import NPContent from '../components/Sections/NPContent';

import { homePageMeta } from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

export default function about() {
    const { description } = homePageMeta;
    const title = "P vs NP - ".concat(homePageMeta.title);
    return (
        <Page description={description} title={title}>
            <Header />
            <div className="project-page">
                <NPContent />
            </div>
            <Footer />
        </Page>
    )
}