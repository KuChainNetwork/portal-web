import React, { useState, useCallback, useEffect } from 'react';
// import { connect } from 'dva';
// import Comming from '../comming';
import styles from './style.less';
import HotNews from 'components/_pages/newsPage/HotNews';
import AllNews from 'components/_pages/newsPage/AllNews';
import NewsDetail from 'components/_pages/newsPage/NewsDetail';
import { connect } from 'dva';

const catIds = {
  en_US: {
    ALL: '',
    WEEK: 11,
    NOTICE: 15,
    BLOG: 14,
    NEWS: 12,
    HOT: 9,
  },
  zh_CN: {
    ALL: '',
    WEEK: 6,
    NOTICE: 16,
    BLOG: 13,
    NEWS: 7,
    HOT: 8,
  },
};

export const NewsContext = React.createContext();

const News = props => {
  const { dispatch, currentLang } = props;
  const [isDetailShow, _setDetailShow] = useState(false);
  const [page, _setPage] = useState(1);
  const [typeKey, _setTypeKey] = useState('ALL');

  const _setDetailShowCallback = useCallback(val => {
    _setDetailShow(val);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  const _setKeyCallback = useCallback(val => {
    _setTypeKey(val);
    _setPage(1);
  }, []);
  const _setPageCallback = useCallback(val => {
    _setPage(val);
  }, []);

  const _getNewsData = useCallback(() => {
    const newsCatId = catIds[currentLang][typeKey];
    dispatch({
      type: 'news/pull',
      payload: {
        page,
        newsCatId,
      },
    });
  }, [currentLang, typeKey, dispatch, page]);

  useEffect(() => {
    _getNewsData();
  }, [_getNewsData]);

  useEffect(() => {
    const newsCatId = catIds[currentLang]['HOT'];
    dispatch({
      type: 'news/pullHot',
      payload: {
        page,
        newsCatId,
      },
    });
  }, [currentLang, dispatch, page]);

  return (
    <NewsContext.Provider
      value={{
        isDetailShow,
        _setDetailShowCallback,
        page,
        _setPageCallback,
        typeKey,
        _setKeyCallback,
      }}
    >
      <div className={styles['newsPage']}>
        <div className={styles['newsPage-left']}>
          {!isDetailShow && <AllNews />}
          {isDetailShow && <NewsDetail _setDetailShowCallback={_setDetailShowCallback} />}
        </div>
        <div className={styles['newsPage-right']}>
          <HotNews _setDetailShowCallback={_setDetailShowCallback} />
        </div>
      </div>
    </NewsContext.Provider>
  );
};

export default connect(state => {
  return {
    pagination: state.news.pagination,
    currentLang: state.app.currentLang,
  };
})(News);
