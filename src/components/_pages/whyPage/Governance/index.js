import React from 'react';
import _ from 'lodash';
import { _t } from 'utils/lang';
import styles from './style.less';
import why_safe from 'assets/why/why_safe.png';
import why_governance from 'assets/why/why_governance.png';
import why_high from 'assets/why/why_high.png';
import why_open from 'assets/why/why_open.png';

export default props => {
  const governanceData = [
    {
      icon: why_safe,
      title: _t('why.gover.item1.title'),
      desc: _t('why.gover.item1.desc'),
    },
    {
      icon: why_governance,
      title: _t('why.gover.item2.title'),
      desc: _t('why.gover.item2.desc'),
    },
    {
      icon: why_high,
      title: _t('why.gover.item3.title'),
      desc: _t('why.gover.item3.desc'),
    },
    {
      icon: why_open,
      title: _t('why.gover.item4.title'),
      desc: _t('why.gover.item4.desc'),
    },
  ];

  return (
    <div className={styles.governance}>
      <div className={styles.title}>{_t('why.gover.title')}</div>
      <div className={styles.desc}>{_t('why.gover.desc')}</div>
      <div className={styles.main}>
        {_.map(governanceData, item => (
          <div className={styles.governanceItem} key={item.icon}>
            <div className={styles.iconBox}>
              <img src={item.icon} alt="" />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
