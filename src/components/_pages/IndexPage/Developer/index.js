import React from 'react';
// import { connect } from 'dva';
import { _t, _tHTML } from 'utils/lang';
import styles from './style.less';
import discord from 'assets/possible/discord.svg';
import rightBg from 'assets/possible/dev_right.svg';

const Developer = () => {
  return (
    <div className={styles.developer}>
      <div className={styles.limit}>
        <div className={styles.left}>
          <div className={styles.title}>
            <h2>{_t('dev.title')}</h2>
          </div>
          <div className={styles.des}>
            {_tHTML('dev.des', { discord })}
          </div>
        </div>
        <img data-role="right-img" src={rightBg} alt={_t('dev.title')} />
      </div>
    </div>
  );
};

export default Developer;
