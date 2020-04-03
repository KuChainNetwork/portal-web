import React from 'react';
import styles from './style.less';

export default props => {
  return (
    <div className={styles['HotNews']}>
      <div className={styles['HotNews-title']}>热门新闻</div>
      <div className={styles['HotNews-list']}>
        {[1, 2, 3].map(item => (
          <div key={item} className={styles['listItem']}>
            <div className={styles['listItem-left']}>
              <div className={styles['circle']}></div>
            </div>
            <div className={styles['listItem-right']}>
              库币将推出Kusama (KSM) Soft Staking-持币返利服务
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
