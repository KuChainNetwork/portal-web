import React, { useEffect, useCallback } from 'react';
import { connect } from 'dva';
import HotNews from 'components/_pages/newsPage/HotNews';
import NewsDetail from 'components/_pages/newsPage/NewsDetail';
import { catIds } from 'config';
import styles from './style.less';

const Detail = props => {
  const { location, dispatch, currentLang, match } = props;

  const getData = useCallback(() => {
    const id = match.params.id
    dispatch({
      type: 'news/detail',
      payload: {
        id,
      },
    });
  }, [match, dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    const tagsId = catIds[currentLang]['HOT'];
    dispatch({
      type: 'news/pullHot',
      payload: {
        page: 1,
        tagsId,
      },
    });
  }, [currentLang, dispatch]);

  return (
    <div className={styles.detail}>
      <div className={styles.detailLeft}>
        <NewsDetail />
      </div>
      <div className={styles.detailRight}>
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
