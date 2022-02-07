import type { AppProps } from 'next/app';
import { AuthProvider } from '../providers/AuthProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black min-h-screen text-white">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}

export default MyApp;
