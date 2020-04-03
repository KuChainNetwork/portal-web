import React from 'react';
import styles from './style.less';
import { Pagination } from 'antd';
import NewsListCard from 'components/_pages/newsPage/NewsListCard';

export default props => {
  const _setDetailShowCallback = props._setDetailShowCallback;
  return (
    <div className={styles['NewsList']}>
      <div className={styles['NewsList-main']}>
        {[...Array(5).keys()].map(item => (
          <React.Fragment key={item}>
            <NewsListCard _setDetailShowCallback={_setDetailShowCallback} />
            <div className={styles['line']}></div>
          </React.Fragment>
        ))}
      </div>
      <div className={styles['NewsList-pageBox']}>
        <Pagination defaultCurrent={1} total={100} />
      </div>
    </div>
  );
};
