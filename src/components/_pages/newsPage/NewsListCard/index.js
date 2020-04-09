import React, { useContext } from 'react';
import styles from './style.less';
import newsImg from 'assets/news/news.jpg';
import { NewsContext } from 'src/pages/news';

export default props => {
  const { _setDetailShowCallback } = useContext(NewsContext);

  return (
    <div
      onClick={() => {
        _setDetailShowCallback(true);
      }}
      className={styles['listCard']}
    >
      <div className={styles['listCard-left']}>
        <img src={newsImg} alt="" />
      </div>
      <div className={styles['listCard-right']}>
        <div className={styles['title']}>Lending market</div>
        <div className={styles['content']}>
          Building an intermediary, peer-to-peer, high-liquidity lending market.
        </div>
        <div className={styles['date']}>2020.03.26</div>
      </div>
    </div>
  );
};
