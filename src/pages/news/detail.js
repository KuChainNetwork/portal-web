import React, { useEffect, useCallback } from 'react';
import styles from './detail.less';
import { connect } from 'dva';
import HotNews from 'components/_pages/newsPage/HotNews';
import NewsDetail from 'components/_pages/newsPage/NewsDetail';
import { catIds } from 'config';

const Detail = props => {
  const { location, dispatch, currentLang } = props;

  const getData = useCallback(() => {
    const id = location.query.id;
    dispatch({
      type: 'news/detail',
      payload: {
        id,
      },
    });
  }, [location.query.id, dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    const newsCatId = catIds[currentLang]['HOT'];
    dispatch({
      type: 'news/pullHot',
      payload: {
        page: 1,
        newsCatId,
      },
    });
  }, [currentLang, dispatch]);

  return (
    <div className={styles['detail']}>
      <div className={styles['detail-left']}>
        <NewsDetail />
      </div>
      <div className={styles['detail-right']}>
        <HotNews pathname={location.pathname} />
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    currentLang: state.app.currentLang,
  };
})(Detail);
