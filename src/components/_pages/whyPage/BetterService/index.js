import React, { useState } from 'react';
import styles from './style.less';
import Arrow from 'components/Arrow';
import classname from 'classname';
import { _t } from 'utils/lang';

export default props => {
  const [isShowLeft, setShowLeft] = useState(true);

  const betterData = [
    {
      icon: 'better_1',
      title: _t('why.better.item1.title'),
      desc: _t('why.better.item1.desc'),
    },
    {
      icon: 'better_2',
      title: _t('why.better.item2.title'),
      desc: _t('why.better.item2.desc'),
    },
    {
      icon: 'better_3',
      title: _t('why.better.item3.title'),
      desc: _t('why.better.item3.desc'),
    },
    {
      icon: 'better_4',
      title: _t('why.better.item4.title'),
      desc: _t('why.better.item4.desc'),
    },
  ];

  return (
    <div className={styles['better']}>
      <div className={styles['better-title']}>{_t('why.better.title')}</div>
      <div className={styles['better-desc']}>{_t('why.better.desc')}</div>
      <div className={styles['better-tool']}>
        <Arrow
          onClick={() => {
            setShowLeft(true);
          }}
          left={true}
          disabled={isShowLeft ? true : false}
          className={styles[isShowLeft ? '' : 'activeArrow']}
        />
        <div className={styles['better-tool-split']}></div>
        <Arrow
          onClick={() => {
            setShowLeft(false);
          }}
          disabled={!isShowLeft ? true : false}
          className={styles[!isShowLeft ? '' : 'activeArrow']}
        />
      </div>
      <div className={styles['better-bannerBox']}>
        <div
          className={classname([
            styles['banner'],
            styles[isShowLeft ? 'bannerShowLeft' : 'bannerShowRight'],
          ])}
        >
          {betterData.map((item, index) => (
            <div className={styles['bannerItem']} key={index}>
              <div className={styles['bannerItem-top']}>
                <img src={require(`assets/why/${item.icon}.svg`)} alt="" />
              </div>
              <div className={styles['bannerItem-bottom']}>
                <div className={styles['title']}>{item.title}</div>
                <div className={styles['desc']}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
