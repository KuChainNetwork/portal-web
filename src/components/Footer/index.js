import React from 'react';
import styles from './style.less';


export default () => {
  return (
    <div className={styles.foot}>
      <div className={styles.copyright}>
        <span>CopyRight ©2017-{new Date().getFullYear()} KuChain.io All Rights Reserved</span>
      </div>
    </div>
  );
}
