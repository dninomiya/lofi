import type { AppProps } from 'next/app';
import { AuthProvider } from '../providers/AuthProvider';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black min-h-screen text-white">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <Toaster />
    </div>
  );
}

export default MyApp;
