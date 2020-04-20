import React from 'react';
import _ from 'lodash';
import introImg from 'assets/why/Introruction.svg';
import { _t } from 'utils/lang';
import styles from './style.less';

export default props => {
  const introData = [
    {
      title: _t('why.intro.item1.title'),
      desc: _t('why.intro.item1.desc'),
    },
    {
      title: _t('why.intro.item2.title'),
      desc: _t('why.intro.item2.desc'),
    },
    {
      title: _t('why.intro.item3.title'),
      desc: _t('why.intro.item3.desc'),
    },
  ];
  return (
    <div className={styles.intro}>
      <div className={styles.left}>
        <div className={styles.title}>{_t('why.intro.title')}</div>
        <div className={styles.desc}>{_t('why.intro.desc')}</div>
        {_.map(introData, (item, index) => (
          <div className={styles.introItem} key={index}>
            <div className={styles.top}>
              <div className={styles.markTitle}>{item.title}</div>
            </div>
            <div className={styles.main}>{item.desc}</div>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <img src={introImg} alt="" />
      </div>
    </div>
  );
};
