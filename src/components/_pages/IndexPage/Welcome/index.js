import React from 'react';
// import { connect } from 'dva';
import styles from './style.less';

// TODO animate bg
const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.limit}>
        <div className={styles.left}>
          <h1>KuChain</h1>
          <h3>Trust transfer operating system</h3>
          <p>Provide efficient and low-cost trust value exchange and connection services for decentralized applications</p>
        </div>
        <div className={styles.right}>

        </div>
      </div>
    </div>
  );
};

export default Welcome;
