import React from 'react';
import styles from './style.less';
import { _t } from 'utils/lang';

export default props => {
  const { _setDetailShowCallback } = props;

  return (
    <div className={styles['HotNews']}>
      <div className={styles['HotNews-title']}>{_t('news.hot')}</div>
      <div className={styles['HotNews-list']}>
        {[1, 2, 3].map(item => (
          <div
            onClick={() => {
              _setDetailShowCallback(true);
            }}
            key={item}
            className={styles['listItem']}
          >
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
