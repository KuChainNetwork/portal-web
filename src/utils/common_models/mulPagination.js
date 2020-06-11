import extend from 'dva-model-extend';
import { toNumber } from 'lodash';
import base from './base';
import filter from './filter';
import sort from './sort';

/**
 * Paging model
 */
export default extend(base, filter, sort, {
  state: {
    records: [],
    pagination: false,
  },
  reducers: {
    savePage(state, { payload: { items, totalNum, currentPage, page, pageSize }, listName = '' }) {
      const current = currentPage ? toNumber(currentPage) : toNumber(page);
      const pagination = {
        current, // current page number
        total: toNumber(totalNum), // total data size
        pageSize: toNumber(pageSize), // size per page
      };
      let newState = null;
      if (listName) {
        newState = {
          ...state,
          [listName]: {
            pagination,
            records: items,
          },
        };
      } else {
        newState = {
          ...state,
          pagination,
          records: items,
        };
      }

      return newState;
    },

    clearPage(state, { listName = '' }) {
      let newState = null;
      if (listName) {
        newState = {
          ...state,
          [listName]: {
            pagination: false,
            records: [],
          },
        };
      } else {
        newState = {
          ...state,
          pagination: false,
          records: [],
        };
      }
      return newState;
    },
  },
});
