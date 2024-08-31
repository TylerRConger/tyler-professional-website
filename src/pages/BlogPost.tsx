import dynamic from 'next/dynamic';


import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import BlogPost from '../Blog/BlogPostCreate';

import { homePageMeta } from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

export default function about() {
    const { description } = homePageMeta;
    const title = "Blog - ".concat(homePageMeta.title);
    return (
        
        <Page description={description} title={title}>
            <Header />
            <div className="p-10"></div>
            <div className="project-page">
                <BlogPost />
            </div>
            <Footer />
        </Page>
    )
}