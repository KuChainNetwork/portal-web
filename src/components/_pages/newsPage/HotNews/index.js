import React, { useCallback } from 'react';
import _ from 'lodash';
import styles from './style.less';
import { _t } from 'utils/lang';
import { connect } from 'dva';
import router from 'umi/router';

const HotNews = props => {
  const { hotRecords, dispatch, pathname } = props;

  const hotItemClick = useCallback(data => {
    dispatch({
      type: 'news/update',
      payload: {
        detailData: data,
      },
    });
    const routerParams = {
      pathname: '/news/detail',
      query: {
        id: data.id,
      },
    };
    if (pathname && pathname.includes('detail')) {
      router.replace(routerParams);
    } else {
      router.push(routerParams);
    }
  }, [dispatch, pathname]);

  return (
    <div className={styles.HotNews}>
      <div className={styles.title}>{_t('news.hot')}</div>
      <div className={styles.list}>
        {_.map(hotRecords, item => (
          <div
            onClick={() => {
              hotItemClick(item);
            }}
            key={item}
            className={styles.listItem}
          >
            <div className={styles.left}>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.right}>{item.title.rendered}</div>
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
