import React, { useContext } from 'react';
import _ from 'lodash';
import { connect } from 'dva';
import NewsListCard from 'components/_pages/newsPage/NewsListCard';
import Pagination from 'components/SSRPagination';
import { NewsContext } from 'src/pages/news';
import styles from './style.less';

const NewsList = props => {
  const { page, setPageCallback } = useContext(NewsContext);
  const { records, pagination } = props;

  return (
    <div className={styles.NewsList}>
      <div className={styles.main}>
        {records &&
          !!records.length &&
          _.map(records, item => (
            <React.Fragment key={item.id}>
              <NewsListCard data={item} />
              <div className={styles.line}></div>
            </React.Fragment>
          ))}
      </div>
      <div className={styles.pageBox}>
        <Pagination
          onChange={page => {
            setPageCallback(page);
          }}
          current={page}
          defaultCurrent={1}
          total={pagination ? pagination.total : 0}
          pathTpl="/news/detail/:page"
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
