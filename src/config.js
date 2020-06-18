// LocalStorage Prefix
export const storagePrefix = 'kuchain';

let KUCHAIN_JS_API_SERVER;
if (_ENV_ === 'dev') {
  KUCHAIN_JS_API_SERVER = 'http://localhost:3100';
} else if (_ENV_ === 'sit') {
  KUCHAIN_JS_API_SERVER = 'http://121.89.211.107:3100';
} else if (_ENV_ === 'prod') {
  KUCHAIN_JS_API_SERVER = 'http://121.89.211.107:3100';
}

export const v2ApiHosts = {
  // Wordpress Address
  WORDPRESS: 'https://blog.kuchain.io',
  // kuchain-js-api-server
  KUCHAIN_JS_API_SERVER,
};

// Subscribe Config
export const mailchimpSubscribe = {
  // Mailchimp form action
  formAction:
    'https://network.us19.list-manage.com/subscribe/post?u=62053eb433ce5c9c4f226590f&amp;id=1bd3042b54',
  // Mailchimp form hidden name
  hiddenName: 'b_62053eb433ce5c9c4f226590f_1bd3042b54',
};

export const catIds = {
  en_US: {
    ALL: [11, 15, 14, 12],
    WEEK: 11,
    NOTICE: 15,
    BLOG: 14,
    NEWS: 12,
    HOT: 9,
  },
  zh_CN: {
    ALL: [16, 6, 13, 7],
    WEEK: 6,
    NOTICE: 16,
    BLOG: 13,
    NEWS: 7,
    HOT: 8,
  },
};
