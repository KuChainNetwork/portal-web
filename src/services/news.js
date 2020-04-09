// import _ from 'lodash';
import { pull, requestFetch } from 'utils/request';

export const getNewsList = async (page = 1, newsCatId) => {
  // const newsCatId = 6;
  const pageSize = 10;
  let pagination = null;
  try {
    const res = await requestFetch(
      `/wp-json/wp/v2/posts?filter${
        newsCatId ? `[cat]=${newsCatId}&` : ''
      }page=${page}&per_page=${pageSize}`,
    );
    const count = res.headers.get('X-WP-Total');
    // const totalPages = res.headers.get('X-WP-TotalPages');
    const items = await res.json();

    pagination = {
      items,
      page,
      totalNum: +count,
      pageSize,
    };
  } catch (e) {
    console.log('getNewsList error', e);
  }
  return pagination;
};

export const getDetail = async id => {
  const data = await pull(`/wp-json/wp/v2/posts/${id}`);
  return data;
};
