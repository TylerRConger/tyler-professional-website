import dynamic from 'next/dynamic';


import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import KartImageCatalog from '../components/Sections/KartImageCatalog';
import {homePageMeta} from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

export default function about() {
    const {title, description} = homePageMeta;
    return (
        <Page description={description} title={title}>
            <Header />
            <KartImageCatalog />
            <Footer />
        </Page>
    )
}