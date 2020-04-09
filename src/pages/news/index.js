import React, { useState, useCallback } from 'react';
// import { connect } from 'dva';
import Comming from '../comming';
import styles from './style.less';
import HotNews from 'components/_pages/newsPage/HotNews';
import AllNews from 'components/_pages/newsPage/AllNews';
import NewsDetail from 'components/_pages/newsPage/NewsDetail';

export const NewsContext = React.createContext();

const News = () => {
  const [isDetailShow, _setDetailShow] = useState(false);

  const _setDetailShowCallback = useCallback(val => {
    _setDetailShow(val);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // TODO ajax

  return (
    <NewsContext.Provider value={{ isDetailShow, _setDetailShowCallback }}>
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

export default News;
