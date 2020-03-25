import _ from 'lodash';
import extend from 'dva-model-extend';
import base from 'utils/common_models/base';
import { getVersion } from 'services/app';
import { setLang } from 'utils/lang';
import { searchToJson, getFirstBrowserLanguage } from 'helper';
import storage from 'utils/storage';

/**
 * Init lang code
 */
const DEFAULT_LANG = 'en_US';
const _langs = [
  {
    key: 'en_US',
    label: 'EN',
  },
  {
    key: 'zh_CN',
    label: '中文',
  },
];

const validLangs = _.map(_langs, ({ key }) => key);
const $initLang = (() => {
  const langInQuery = searchToJson().lang;
  const langInStore = storage.getItem('lang');

  let _lang = langInQuery || langInStore;
  if (!_lang) {
    let browserLang = getFirstBrowserLanguage();
    if (browserLang) {
      browserLang = browserLang.replace('-', '_');
    }
    _lang = browserLang;
  }

  if (_lang && _.indexOf(validLangs, _lang) > -1) {
    return _lang;
  }

  return DEFAULT_LANG;
})();

/**
 * Base app model
 */
export default extend(base, {
  namespace: 'app',
  state: {
    currentHash: '',
    langs: _langs,
    currentLang: null,
    appReady: false,
  },
  reducers: {
    updateHash(state, { payload: { currentHash } }) {
      return {
        ...state,
        currentHash,
      };
    }
  },
  effects: {
    *init(_, { put, take }) {
      yield put({ type: 'selectLang' });
      yield take('selectLang/@@end');
      yield put({
        type: 'update',
        payload: {
          appReady: true,
        },
      });
    },
    *checkVersion(_, { call }) {
      const {
        release,
      } = yield call(getVersion);
      if (release && release !== _RELEASE_) {
        console.log('Current Release:', _RELEASE_);
        console.log('New Release:', release);
        console.log('Try to refresh new release website');
        window.location.reload(true);
      }
    },
    *selectLang({ payload: { lang } = {} }, { put, select, call }) {
      lang = lang || $initLang;
      if (_.indexOf(validLangs, lang) === -1) {
        lang = DEFAULT_LANG;
      }

      // realLoad false
      setLang(lang, false);
      storage.setItem('lang', lang);

      yield put({
        type: 'update',
        payload: {
          currentLang: lang,
        },
      });
    },

  },
  subscriptions: {
    /**
     * fix hash change caused by replaceState
     * @param {*} param0
     */
    watchScroll({ dispatch }) {
      console.log('bindbind hash');
      const { history } = window;

      const dispatchHash = () => {
        dispatch({
          type: 'updateHash',
          payload: { currentHash: window.location.hash },
        });
      };

      const _wr = (type) => {
        const orig = history[type];
        return function() {
          const rv = orig.apply(this, arguments);
          const e = new Event(type);
          e.arguments = arguments;
          window.dispatchEvent(e);
          return rv;
        };
      };
      history.pushState = _wr('pushState');
      history.replaceState = _wr('replaceState');

      window.addEventListener('replaceState', function(e) {
        console.log('THEY DID IT AGAIN! replaceState');
        // console.log(window.location.hash);
        dispatchHash();
      });
      window.addEventListener('pushState', function(e) {
        console.log('THEY DID IT AGAIN! pushState');
        // console.log(window.location.hash);
        dispatchHash();
      });
      dispatchHash();
    },
    setup({ history, dispatch }) {
      history.listen(({ hash }) => {
        dispatch({
          type: 'updateHash',
          payload: { currentHash: hash },
        });
      });

      dispatch({ type: 'init' });
    },
    checkVersion({ dispatch }) {
      if (!_DEV_) {
        dispatch({
          type: 'checkVersion',
        });
      }
    },
  },
});
