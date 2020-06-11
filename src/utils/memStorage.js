/**
 * memStorage
 */
/**
 * memStorage Temporary storage in memory, Interface is same as util/storage
 * @type {{}}
 */

import { storagePrefix } from 'config';

const genKey = (subKey) => `${storagePrefix}_${subKey}`;

const storage = {};

const localStorage = {
  getItem: (key) => {
    const data = storage[genKey(key)];

    if (data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        console.log(e);
      }
    } else {
      return null;
    }
  },
  setItem: (key, data) => {
    storage[genKey(key)] = JSON.stringify(data);
  },
};

export default localStorage;
