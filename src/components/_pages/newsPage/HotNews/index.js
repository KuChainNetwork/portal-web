import React from 'react';
import styles from './style.less';
import { _t } from 'utils/lang';
import { connect } from 'dva';

const HotNews = props => {
  const { hotRecords, setDetailShowCallback, dispatch } = props;

  const _clkCallback = data => {
    setDetailShowCallback(true);
    dispatch({
      type: 'news/update',
      payload: {
        detailData: data,
      },
    });
  };

  return (
    <div className={styles['HotNews']}>
      <div className={styles['HotNews-title']}>{_t('news.hot')}</div>
      <div className={styles['HotNews-list']}>
        {hotRecords.map(item => (
          <div
            onClick={() => {
              _clkCallback(item);
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
