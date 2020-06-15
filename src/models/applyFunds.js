import extend from 'dva-model-extend';
import base from 'utils/common_models/base';
import paginate from 'utils/common_models/paginate';
import { applyForTestFunds } from '../services/applyFunds';

export default extend(base, paginate, {
  namespace: 'applyFunds',
  state: {},

  effects: {
    *postApply({ payload }, { call }) {
      return yield call(applyForTestFunds, payload);
    },
  },
});
