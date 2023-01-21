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
      </main>
    </>
  );
}
