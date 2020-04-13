import React from 'react';
import _ from 'lodash';
import styles from './style.less';
import { _t } from 'utils/lang';

export default props => {
  const governanceData = [
    {
      icon: 'why_safe',
      title: _t('why.gover.item1.title'),
      desc: _t('why.gover.item1.desc'),
    },
    {
      icon: 'why_governance',
      title: _t('why.gover.item2.title'),
      desc: _t('why.gover.item2.desc'),
    },
    {
      icon: 'why_high',
      title: _t('why.gover.item3.title'),
      desc: _t('why.gover.item3.desc'),
    },
    {
      icon: 'why_open',
      title: _t('why.gover.item4.title'),
      desc: _t('why.gover.item4.desc'),
    },
  ];

  return (
    <div className={styles['governance']}>
      <div className={styles['governance-title']}>{_t('why.gover.title')}</div>
      <div className={styles['governance-desc']}>{_t('why.gover.desc')}</div>
      <div className={styles['governance-main']}>
        {_.map(governanceData, item => (
          <div className={styles['governanceItem']} key={item.icon}>
            <div className={styles['governanceItem-iconBox']}>
              <img src={require(`assets/why/${item.icon}.png`)} alt="" />
            </div>
            <div className={styles['governanceItem-info']}>
              <div className={styles['governanceItem-info-title']}>{item.title}</div>
              <div className={styles['governanceItem-info-desc']}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
