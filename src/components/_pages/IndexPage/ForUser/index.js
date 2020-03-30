import React, { useCallback, useRef } from 'react';
import _ from 'lodash';
// import classname from 'classname';
// import { connect } from 'dva';
import AnimateRectOnScroll from 'components/AnimateRectOnScroll';
import Arrow from 'components/Arrow';
import { useIsMobile } from 'components/Responsive';
import { _t } from 'utils/lang';
import styles from './style.less';
import icon_KuChain from 'assets/possible/icon_KuChain.svg';
import icon_Product from 'assets/possible/icon_Product.svg';
import icon_Community from 'assets/possible/icon_Community.svg';
import icon_Problem from 'assets/possible/icon_Problem.svg';

const ForUser = () => {
  const isMobile = useIsMobile();

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
      icon: icon_KuChain,
      title: _t('user.kuchain'),
    },
    {
      icon: icon_Product,
      title: _t('user.product'),
    },
    {
      icon: icon_Community,
      title: _t('user.community'),
    },
    {
      icon: icon_Problem,
      title: _t('user.problem'),
    },
  ];

  // TODO V0.2 arrow
  return (
    <div className={styles.foruser}>
      <AnimateRectOnScroll
        disableChange={isMobile}
        limitWidth={isMobile ? 145 : 400}
        onScroll={handleAnimateScroll}
      />

      <div className={styles.limit}>
        <div className={styles.title}>
          <AnimateRectOnScroll.Text ref={animateTextRef}>
            <h2>{_t('user.title')}</h2>
          </AnimateRectOnScroll.Text>
        </div>
        <div className={styles.roles}>
          {_.map(roles, ({ icon, title }, idx) => {
            return (
              <div key={idx} className={styles.role}>
                <img src={icon} alt={title} />
                <p>{ title }</p>
                {/* <div className={styles.arrow}>
                  <Arrow />
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForUser;
