import React, { useCallback, useMemo } from 'react';
import _ from 'lodash';
import { connect } from 'dva';
import { Link } from 'components/Router';
import { _t } from 'utils/lang';
import styles from './style.less';

const HotNews = props => {
  const { hotRecords, dispatch, location } = props;
  const { pathname } = location;

  const hotItemClick = useCallback(
    data => {
      dispatch({
        type: 'news/update',
        payload: {
          detailData: data,
        },
      });
    },
    [dispatch],
  );

  const isFromDetail = useMemo(() => pathname && pathname.includes('detail'), [pathname]);

  const type = useMemo(() => {
    let type = null;
    if (isFromDetail) {
      type = location.query.type;
    } else {
      type = pathname.replace(/\/news\/?/gi, '') || 'all';
    }
    return type;
  }, [location, pathname, isFromDetail]);

  return (
    <div className={styles.HotNews}>
      <div className={styles.title}>{_t('news.hot')}</div>
      <div className={styles.list}>
        {_.map(hotRecords, item => (
          <Link to={`/news/detail/${item.id}?type=${type}`} replace={isFromDetail} key={item.id}>
            <div
              onClick={() => {
                hotItemClick(item);
              }}
              className={styles.listItem}
            >
              <div className={styles.left}>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.right}>{item.title.rendered}</div>
            </div>
          </Link>
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
