import React, { useEffect } from 'react';
import styles from './style.less';
import Introduction from 'components/_pages/whyPage/Introduction';
import Architecture from 'components/_pages/whyPage/Architecture';
import Governance from 'components/_pages/whyPage/Governance';
import BetterService from 'components/_pages/whyPage/BetterService';

const WhyKuchain = props => {
  const {
    location: { query },
  } = props;

  useEffect(() => {
    if (!!query.anchor) {
      const el = document.getElementById(query.anchor);
      if (!!el) {
        el.scrollIntoView();
        setTimeout(() => {
          el.scrollIntoView();
        }, 600);
      }
    }
  }, [query.anchor]);

  return (
    <div className={styles.why}>
      <div id="introduction" className={styles.introduction}>
        <Introduction />
      </div>
      <div id="architecture" className={styles.architecture}>
        <Architecture />
      </div>
      <div id="governance" className={styles.governance}>
        <Governance />
      </div>
      <div id="betterService" className={styles.betterService}>
        <BetterService />
      </div>
    </div>
  );
};

export default WhyKuchain;
