import React from 'react';
// import { connect } from 'dva';
import { Link } from 'components/Router';
import Arrow from 'components/Arrow';
import { _t, _tHTML } from 'utils/lang';
import styles from './style.less';
import tag from 'assets/comming/kuchain-tag.svg';
import bg from 'assets/comming/comming-global.svg';

const Comming = () => {
  return (
    <div className={styles.comming}>
      <div className={styles.limit}>
        <div className={styles.left}>
          <h2>{_tHTML('comming.title')}</h2>
          <img src={tag} alt="KuChain" />

          <div>
            <Link to="/" style={{ display: 'inline-block' }}>
              <div className={styles.back}>
                <span>{_t('comming.back')}</span>
                <div className={styles.arrow}>
                  <Arrow />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <img src={bg} alt="KuChain Comming" />
        </div>
      </div>
    </div>
  );
};

export default Comming;
