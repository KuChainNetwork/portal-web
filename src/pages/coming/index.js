import React from 'react';
import { useIsMobile } from 'components/Responsive';
import { _tHTML } from 'utils/lang';
import styles from './style.less';
import tag from 'assets/coming/kuchain-tag.svg';
import bg from 'assets/coming/coming_earth.svg';

const Coming = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.coming}>
      <div className={styles.limit}>
        <div className={styles.left}>
          <h2>{_tHTML(isMobile ? 'coming.title.mb' : 'coming.title')}</h2>
          <img src={tag} alt="KuChain" />
        </div>

        <div className={styles.right}>
          <img src={bg} alt="KuChain coming" />
        </div>
      </div>
    </div>
  );
};

export default Coming;
