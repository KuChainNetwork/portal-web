import React, { useState } from 'react';
import _ from 'lodash';
import classname from 'classname';
import Arrow from 'components/Arrow';
import { _t } from 'utils/lang';
import styles from './style.less';
import betterImg1 from 'assets/why/better_1.svg';
import betterImg2 from 'assets/why/better_2.svg';
import betterImg3 from 'assets/why/better_3.svg';
import betterImg4 from 'assets/why/better_4.svg';

export default props => {
  const [isShowLeft, setShowLeft] = useState(true);

  const betterData = [
    {
      icon: betterImg1,
      title: _t('why.better.item1.title'),
      desc: _t('why.better.item1.desc'),
    },
    {
      icon: betterImg2,
      title: _t('why.better.item2.title'),
      desc: _t('why.better.item2.desc'),
    },
    {
      icon: betterImg3,
      title: _t('why.better.item3.title'),
      desc: _t('why.better.item3.desc'),
    },
    {
      icon: betterImg4,
      title: _t('why.better.item4.title'),
      desc: _t('why.better.item4.desc'),
    },
  ];

  return (
    <div className={styles.better}>
      <div className={styles.title}>{_t('why.better.title')}</div>
      <div className={styles.desc}>{_t('why.better.desc')}</div>
      <div className={styles.tool}>
        <Arrow
          onClick={() => {
            setShowLeft(true);
          }}
          left={true}
          disabled={isShowLeft ? true : false}
          className={classname({
            [styles.activeArrow]: !isShowLeft,
          })}
        />
        <div className={styles.split}></div>
        <Arrow
          onClick={() => {
            setShowLeft(false);
          }}
          disabled={!isShowLeft ? true : false}
          className={classname({
            [styles.activeArrow]: isShowLeft,
          })}
        />
      </div>
      <div className={styles.bannerBox}>
        <div
          className={classname([
            styles['banner'],
            styles[isShowLeft ? 'bannerShowLeft' : 'bannerShowRight'],
          ])}
        >
          {_.map(betterData, (item, index) => (
            <div className={styles.bannerItem} key={index}>
              <div className={styles.top}>
                <img src={item.icon} alt="" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
