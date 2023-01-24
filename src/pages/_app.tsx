import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Playfair_Display } from '@next/font/google';
import cs from 'clsx';
import Head from 'next/head';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Wizarding World</title>
      </Head>
      <main className={cs(playfair.variable)}>
        <Component {...pageProps} />
        <div className="fixed bottom-0 left-0 right-0 h-[164px] bg-gradient-to-t from-bg/90 to-transparent" />
      </main>
    </>
  );
}
