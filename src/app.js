import { message } from 'antd';
import 'utils/lib-flexible';

if (typeof window.Intl === 'undefined') {
  window.Intl = require('intl');
}

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});
