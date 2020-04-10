import React from 'react';
import styles from './style.less';
import { _t } from 'utils/lang';
import { connect } from 'dva';
import router from 'umi/router';

const HotNews = props => {
  const { hotRecords, dispatch, pathname } = props;

  const hotItemClick = data => {
    dispatch({
      type: 'news/update',
      payload: {
        detailData: data,
      },
    });
    if (pathname && pathname.includes('detail')) {
      router.replace({
        pathname: '/news/detail',
        query: {
          id: data.id,
        },
      });
    } else {
      router.push({
        pathname: '/news/detail',
        query: {
          id: data.id,
        },
      });
    }
  };

  return (
    <div className={styles['HotNews']}>
      <div className={styles['HotNews-title']}>{_t('news.hot')}</div>
      <div className={styles['HotNews-list']}>
        {hotRecords.map(item => (
          <div
            onClick={() => {
              hotItemClick(item);
            }}
            key={item}
            className={styles['listItem']}
          >
            <div className={styles['listItem-left']}>
              <div className={styles['circle']}></div>
            </div>
            <div className={styles['listItem-right']}>{item.title.rendered}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default connect(state => {
  return {
    hotRecords: state.news.hotRecords,
  };
})(HotNews);
