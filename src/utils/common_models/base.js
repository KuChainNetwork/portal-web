import _ from 'lodash';

/**
 * Base model
 */
export default {
  reducers: {
    // update state
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    // reset state
    reset(state, { payload }) {
      return payload;
    },
  },
};
