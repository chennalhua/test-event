import Head from 'next/head';
import Script from 'next/script';
export default function MyApp({ Component, pageProps }) {

    return <>
        <Head><link rel="icon" href="/favicon.ico" /></Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-142989569-1"></Script>
        <Script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-142989569-1');
            `}
        </Script>
        <Component {...pageProps} />

    </>
}