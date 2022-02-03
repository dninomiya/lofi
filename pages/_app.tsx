import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { AuthProvider } from '../providers/AuthProvider';
import { useEffect } from 'react';
import { firebaseCloudMessaging } from '../services/web-push';
import { onMessage } from 'firebase/messaging';
import { msg } from '../firebase/client';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    firebaseCloudMessaging.init();

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/firebase-messaging-sw.js').then(
          function (registration) {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope
            );
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }

    onMessage(msg, (payload) => {
      console.log('Message received. ', payload);
      alert();
      // ...
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}

export default MyApp;
