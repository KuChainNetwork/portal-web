import _ from 'lodash';
import { pull, requestFetch } from 'utils/request';

const getCategories = (newsCatId) => {
  if (!newsCatId) {
    return '';
  }
  if (_.isArray(newsCatId)) {
    return _.reduce(newsCatId, (pre, cur) => `${pre}categories[]=${cur}&`, '');
  }
  return `categories=${newsCatId}&`;
};

export const getNewsList = async (page = 1, newsCatId) => {
  const pageSize = 10;
  let pagination = null;
  try {
    const res = await requestFetch(
      `/wp-json/wp/v2/posts?${getCategories(newsCatId)}page=${page}&per_page=${pageSize}`,
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

export const getNewsListByTag = async (page = 1, tagsId) => {
  const pageSize = 10;
  let pagination = null;
  try {
    const res = await requestFetch(
      `/wp-json/wp/v2/posts?page=${page}&per_page=${pageSize}${tagsId ? `&tags=${tagsId}` : ''}`,
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

export const getDetail = async (id) => {
  const data = await pull(`/wp-json/wp/v2/posts/${id}`);
  return data;
};
