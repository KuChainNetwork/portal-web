/**
 * Paging model
 */
export default {
  state: {
    records: [],
    pagination: false,
  },
  reducers: {
    savePage(state, { payload: { items, totalNum, currentPage, page = 1, pageSize } }) {
      const current = typeof currentPage === 'number' ? currentPage : page;
      const pagination = {
        total: totalNum, // total data size
        current, // current page number
        pageSize, // size per page
      };
      return {
        ...state,
        pagination,
        records: items || [],
      };
    },
  },
};
