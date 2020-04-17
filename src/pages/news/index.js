import React, { useState, useCallback, useEffect } from 'react';
import HotNews from 'components/_pages/newsPage/HotNews';
import AllNews from 'components/_pages/newsPage/AllNews';
import { connect } from 'dva';
import router from 'umi/router';
import { catIds } from 'config';
import styles from './style.less';

export const NewsContext = React.createContext();

const News = props => {
  const { dispatch, currentLang, match } = props;
  const defaultTypeKey = match.params.type ? match.params.type.toUpperCase() : 'ALL';
  const [page, setPage] = useState(1);
  const [typeKey, setTypeKey] = useState(defaultTypeKey);

  const pageToDetail = useCallback(id => {
    router.push({
      pathname: `/news/detail/${id}`,
    });
  }, []);

  const setKeyCallback = useCallback(type => {
    setTypeKey(type);
    setPage(1);
    router.push({
      pathname: `/news/${type.toLowerCase()}`,
    });
  }, []);

  const getNewsData = useCallback(() => {
    const newsCatId = catIds[currentLang][typeKey];
    const page = match.params.page ? Number(match.params.page) : 1;
    setPage(page);
    dispatch({
      type: 'news/pull',
      payload: {
        page,
        newsCatId,
      },
    });
  }, [currentLang, typeKey, dispatch, match]);

  useEffect(() => {
    getNewsData();
  }, [getNewsData]);

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
    <NewsContext.Provider
      value={{
        pageToDetail,
        page,
        typeKey,
        setKeyCallback,
      }}
    >
      <div className={styles.newsPage}>
        <div className={styles.newsPageLeft}>
          <AllNews />
        </div>
        <div className={styles.newsPageRight}>
          <HotNews />
        </div>
      </div>
    </NewsContext.Provider>
  );
};

export default connect(state => {
  return {
    currentLang: state.app.currentLang,
  };
})(News);
