import React, { useCallback, useRef } from 'react';
import _ from 'lodash';
// import classname from 'classname';
// import { connect } from 'dva';
import AnimateRectOnScroll from 'components/AnimateRectOnScroll';
import { _t } from 'utils/lang';
import styles from './style.less';
import icon_Broker from 'assets/possible/icon_Broker.svg';
import icon_Developer from 'assets/possible/icon_Developer.svg';
import icon_Mechanism from 'assets/possible/icon_Mechanism.svg';
import icon_wallet from 'assets/possible/icon_wallet.svg';

const Possible = () => {
  const animateTextRef = useRef(null);
  const handleAnimateScroll = useCallback((w) => {
    if (animateTextRef.current &&
      typeof animateTextRef.current.onAnimateScroll === 'function'
    ) {
      animateTextRef.current.onAnimateScroll(w);
    }
  }, []);

  const roles = [
    {
      icon: icon_wallet,
      title: _t('possible.wallet'),
    },
    {
      icon: icon_Broker,
      title: _t('possible.broker'),
    },
    {
      icon: icon_Developer,
      title: _t('possible.developer'),
    },
    {
      icon: icon_Mechanism,
      title: _t('possible.mechanism'),
    },
  ];

  return (
    <div className={styles.possible}>
      <AnimateRectOnScroll
        limitWidth={400}
        onScroll={handleAnimateScroll}
      />

      <div className={styles.limit}>
        <div className={styles.title}>
          <AnimateRectOnScroll.Text ref={animateTextRef}>
            <h2>{_t('possible.title')}</h2>
          </AnimateRectOnScroll.Text>
        </div>
        <div className={styles.des}>
          {_t('possible.des')}
        </div>
        <div className={styles.roles}>
          {_.map(roles, ({ icon, title }, idx) => {
            return (
              <div key={idx} className={styles.role}>
                <img src={icon} alt={title} />
                <p>{ title }</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Possible;
