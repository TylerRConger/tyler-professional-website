import dynamic from 'next/dynamic';


import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import ProjectRequest from '../components/Sections/ProjectRequestContent';

import { homePageMeta } from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

export default function about() {
    const { description } = homePageMeta;
    var title = "Project Unavailable - ".concat(homePageMeta.title);
    return (
        <Page description={description} title={title}>
            <Header />
            <div className="project-page">
                <ProjectRequest />
            </div>
            <Footer />
        </Page>
    )
}