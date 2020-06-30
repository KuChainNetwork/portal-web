/**
 * requests
 */
import qs from 'qs';
import fetch from 'isomorphic-fetch';
import storage from './storage';
import { formlize } from 'helper';
import memStorage from './memStorage';

let xVersion = null; // debug x-version

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  // const error = new Error(response.statusText)
  // error.response = response;
  const error = {
    msg: response.statusText,
    response,
  };
  throw error;
}

function parseJSON(response) {
  return response.json();
}

// function checkError(json) {
//   if (typeof json.code === 'number') {
//     json.code = `${json.code}`;
//   }

//   if (typeof json.success === 'undefined' || json.success === false) {
//     throw json;
//   }

//   return json;
// }

function getCsrf(url) {
  const csrf = memStorage.getItem('csrf');
  return csrf;
}

export function setCsrf(value = '') {
  memStorage.setItem('csrf', value);
}

export function setKuChainCsrf(value = '') {
  memStorage.setItem('kuchainCsrf', value);
}

export function setXVersion(value = '') {
  xVersion = value;
  storage.setItem('_x_version', value);
}

window.setXVersion = setXVersion;

export function requestFetch(
  url,
  options = {
    method: 'GET',
  },
) {
  options.mode = options.mode || 'cors';
  options.credentials = options.credentials || 'include';
  options.headers = {
    Accept: 'application/json',
    ...options.headers,
  };

  const _xVersion = xVersion || storage.getItem('_x_version');

  if (_xVersion) {
    if (url.indexOf('?') === -1) {
      url = `${url}?x-version=${_xVersion}`;
    } else {
      url = `${url}&x-version=${_xVersion}`;
    }
  }

  return fetch(url, options).then(checkStatus);
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options = {}) {
  options.mode = options.mode || 'cors';
  options.credentials = options.credentials || 'include';
  options.headers = {
    Accept: 'application/json',
    ...options.headers,
  };

  const _xVersion = xVersion || storage.getItem('_x_version');

  if (_xVersion) {
    if (url.indexOf('?') === -1) {
      url = `${url}?x-version=${_xVersion}`;
    } else {
      url = `${url}&x-version=${_xVersion}`;
    }
  }

  return (
    fetch(url, options)
      .then(checkStatus)
      .then(parseJSON)
      // .then(checkError)
      .catch((e) => {
        if (typeof e === 'object') {
          e._req_host = url;

          if (
            e.code === '401' || // user need login
            e.code >= '600' // system error code
          ) {
            e._no_sentry = true;
          }
        }
        throw e;
      })
  );
}

/**
 * Get.
 *
 * @param {string} url
 * @param {object} query
 * @return {object} An object containing either "data" or "err"
 */
export function pull(url, query = {}) {
  query.c = getCsrf(url) || undefined;
  query.lang = query.lang || storage.getItem('lang');
  query._t = Date.now(); // Prevent caching mechanism
  let queryStr = qs.stringify(query) || '';
  if (queryStr) {
    if (url.indexOf('?') === -1) {
      queryStr = `?${queryStr}`;
    } else {
      queryStr = `&${queryStr}`;
    }
  }

  return request(`${url}${queryStr}`, {
    method: 'GET',
  });
}

/**
 * Post.
 *
 * @param {string} url
 * @param {object} data
 * @param {Boolean} disabledLang
 * @return {object} An object containing either "data" or "err"
 */
export function post(url, data = {}, disabledLang = false, isJson = false) {
  let queryStr = '';
  const query = {};

  query.c = getCsrf(url) || undefined;

  if (!disabledLang) {
    query.lang = storage.getItem('lang');
  }

  queryStr = qs.stringify(query);
  if (url.indexOf('?') === -1) {
    queryStr = `?${queryStr}`;
  } else {
    queryStr = `&${queryStr}`;
  }
  const options = {
    method: 'POST',
    body: isJson ? JSON.stringify(data) : formlize(data),
  };
  if (isJson) {
    options.headers = {
      'Content-Type': 'application/json',
      // 'X-Request-With': null,
    };
  }
  return request(`${url}${queryStr}`, options);
}

/**
 * Delete.
 *
 * @param {string} url
 * @param {object} query
 * @return {object} An object containing either "data" or "err"
 */
export function del(url, query = {}) {
  query.c = getCsrf(url) || undefined;
  query.lang = query.lang || storage.getItem('lang');
  let queryStr = qs.stringify(query) || '';
  if (queryStr) {
    if (url.indexOf('?') === -1) {
      queryStr = `?${queryStr}`;
    } else {
      queryStr = `&${queryStr}`;
    }
  }

  return request(`${url}${queryStr}`, {
    method: 'DELETE',
  });
}
