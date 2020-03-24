
import { getVersion } from 'services/app';

export default {
  namespace: 'app',
  state: {
    nav: '',
    currentHash: '',
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
    },
    checkVersion({ dispatch }) {
      if (!_DEV_) {
        dispatch({
          type: 'checkVersion',
        });
      }
    },
  },
}
