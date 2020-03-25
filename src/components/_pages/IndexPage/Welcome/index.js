import React from 'react';
// import { connect } from 'dva';
import { _t } from 'utils/lang';
import styles from './style.less';

// TODO animate bg
const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.limit}>
        <div className={styles.left}>
          <h1>{_t('welcome.title')}</h1>
          <h3>{_t('welcome.sub.title')}</h3>
          <p>{_t('welcome.des')}</p>
        </div>
        <div className={styles.right}>

        </div>
      </div>
    </div>
  );
};

export default Welcome;
