import type { AppProps } from 'next/app';
import { AuthProvider } from '../providers/AuthProvider';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { DefaultSeo } from 'next-seo';
import { Site } from '../lib/site';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black min-h-screen text-white">
      <DefaultSeo
        titleTemplate={`%s | ${Site.title}`}
        twitter={{ cardType: 'summary_large_image' }}
        description={Site.description}
        openGraph={{
          type: 'website',
          images: [
            {
              url: `${Site.origin}/images/ogp.png`,
            },
          ],
        }}
        defaultTitle={Site.title}
      />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <Toaster />
    </div>
  );
}

export default MyApp;
