import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import BaseTemplate from '../components/template/base/BaseTemplate';
import { mockBaseTemplateProps } from '../components/template/base/BaseTemplate.mocks';
import styles from '../styles/Home.module.scss';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
    return (
        <section className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <a href='https://nextjs.org'>Next.js!</a>
            </h1>
            <BaseTemplate {...mockBaseTemplateProps.base} />
        </section>
    );
};

export default Home;

Home.getLayout = (page) => {
    return (
        <PrimaryLayout>
            <SidebarLayout />
            {page}
        </PrimaryLayout>
    );
};