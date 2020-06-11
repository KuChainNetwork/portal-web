import extend from 'dva-model-extend';
import base from 'utils/common_models/base';
import paginate from 'utils/common_models/paginate';
import { applyForTestFunds } from '../services/applyFunds';

export default extend(base, paginate, {
  namespace: 'applyFunds',
  state: {},

  effects: {
    *postApply({ payload: { page, tagsId } = {} }, { put, call }) {
      const paginationSave = yield call(applyForTestFunds, {
        account: 'validator2',
      });
      console.log(paginationSave);
    },
  },
});
