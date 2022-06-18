import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'stateManagement/store';
import '../styles/globals.scss';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
        </Provider>
    );
}

export default MyApp;
