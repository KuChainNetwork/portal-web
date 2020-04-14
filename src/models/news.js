import extend from 'dva-model-extend';
import base from 'utils/common_models/base';
import paginate from 'utils/common_models/paginate';
import { getNewsList, getNewsListByTag, getDetail } from 'services/news';

export default extend(base, paginate, {
  namespace: 'news',
  state: {
    detail: null,
    detailData: {},
    hotRecords: [],
  },
  reducers: {
    updateHotRecords(
      state,
      {
        payload: { items },
      },
    ) {
      return {
        ...state,
        hotRecords: items || [],
      };
    },
  },
  effects: {
    *pull({ payload: { page, newsCatId } = {} }, { put, call, select }) {
      let oldPagination;
      const pagination = yield select(state => state.news.pagination);
      if (pagination) {
        oldPagination = pagination;
      }

      // if (!page && oldPagination) {
      //   page = oldPagination.current;
      // }

      yield put({
        type: 'update',
        payload: {
          records: [],
          ...(oldPagination && page
            ? {
                pagination: {
                  ...oldPagination,
                  current: page,
                },
              }
            : {
                pagination: false,
              }),
        },
      });

      const paginationSave = yield call(getNewsList, page, newsCatId);
      yield put({
        type: 'savePage',
        payload: paginationSave,
      });
    },
    *pullHot({ payload: { page, tagsId } = {} }, { put, call }) {
      const paginationSave = yield call(getNewsListByTag, page, tagsId);
      yield put({
        type: 'updateHotRecords',
        payload: paginationSave,
      });
    },
    *detail(
      {
        payload: { id },
      },
      { put, call },
    ) {
      const detailData = yield call(getDetail, id);
      yield put({
        type: 'update',
        payload: { detailData },
      });
    },
  },
});
