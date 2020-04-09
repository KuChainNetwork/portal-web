import React, { useContext } from 'react';
import styles from './style.less';
import { Pagination } from 'antd';
import NewsListCard from 'components/_pages/newsPage/NewsListCard';
import { connect } from 'dva';
import { NewsContext } from 'src/pages/news';

const NewsList = props => {
  const { page, setPageCallback } = useContext(NewsContext);
  const { records, pagination } = props;

  return (
    <div className={styles['NewsList']}>
      <div className={styles['NewsList-main']}>
        {records.map(item => (
          <React.Fragment key={item.id}>
            <NewsListCard data={item} />
            <div className={styles['line']}></div>
          </React.Fragment>
        ))}
      </div>
      <div className={styles['NewsList-pageBox']}>
        <Pagination
          onChange={page => {
            setPageCallback(page);
          }}
          current={page}
          defaultCurrent={1}
          total={pagination ? pagination.total : 0}
        />
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    records: state.news.records,
    pagination: state.news.pagination,
  };
})(NewsList);
