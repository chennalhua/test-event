import Head from 'next/head';
import Script from 'next/script';
export default function MyApp({ Component, pageProps }) {

    return <>
        <Head><link rel="icon" href="/favicon.ico" /></Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2844YFT4W8"></Script>
        <Script>
            {
                `
                !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '600779042223725');
fbq('track', 'PageView');
document.addEventListener("xxx", function(){
    fbq('track', 'testButton2');
  });
`
            }
        </Script>
        <Component {...pageProps} />

    </>
}