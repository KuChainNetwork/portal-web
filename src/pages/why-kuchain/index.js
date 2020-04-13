import React from 'react';
import styles from './style.less';
import Introduction from 'components/_pages/whyPage/Introduction';
import Architecture from 'components/_pages/whyPage/Architecture';
import Governance from 'components/_pages/whyPage/Governance';
import BetterService from 'components/_pages/whyPage/BetterService';

const WhyKuchain = () => {
  return (
    <div className={styles.why}>
      <div className={styles.introduction}>
        <Introduction />
      </div>
      <div className={styles.architecture}>
        <Architecture />
      </div>
      <div className={styles.governance}>
        <Governance />
      </div>
      <div className={styles.betterService}>
        <BetterService />
      </div>
    </div>
  );
};

export default WhyKuchain;
