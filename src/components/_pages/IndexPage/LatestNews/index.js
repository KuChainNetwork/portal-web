import _ from 'lodash';
import React from 'react';
// import { connect } from 'dva';
import { _t } from 'utils/lang';
import Arrow from 'components/Arrow';
import { useIsMobile } from 'components/Responsive';
import styles from './style.less';

// TODO V0.2 data
const LatestNews = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.latestNews}>
      <div className={styles.limit}>
        <h2>{_t('news.title')}</h2>
        <div className={styles.list}>
          {_.map(isMobile ? [1] : [1, 2, 3], (item, idx) => {
            return (
              <div key={idx} className={styles.item}>
                <div className={styles.image}>
                  <img src="https://www.baidu.com/img/bd_logo1.png?where=super" alt="" />
                </div>
                <div className={styles.info}>
                  <h6>Lending market</h6>
                  <p>Building an intermediary, peer-to-peer, high-liquidity lending market.</p>
                  <div className={styles.time}>2020.3.26</div>
                </div>
              </div>
            );
          })}
        </div>
        {isMobile ? (
          <div className={styles.moreMb}>
            <div className={styles.count}>
              <span data-role="current">1</span> / <span>3</span>
            </div>
            <div className={styles.more}>
              <span>{_t('news.more')}</span>
              <Arrow className={styles.arrow} />
            </div>
          </div>
        ) : (
          <div className={styles.more}>
            <span>{_t('news.more')}</span>
            <Arrow className={styles.arrow} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestNews;
