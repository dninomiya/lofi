import 'firebase/messaging';
import { getToken } from 'firebase/messaging';
import localforage from 'localforage';
import { msg } from '../firebase/client';

const firebaseCloudMessaging = {
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token');
  },

  init: async function () {
    try {
      if ((await this.tokenInlocalforage()) !== null) {
        return false;
      }

      await Notification.requestPermission();
      const token = await getToken(msg);
      localforage.setItem('fcm_token', token);
      console.log('fcm_token', token);
    } catch (error) {
      console.error(error);
    }
  },
};

export { firebaseCloudMessaging };
