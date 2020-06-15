import React, { useState } from 'react';
import { _t } from 'utils/lang';
import styles from './style.less';
import tag from 'assets/coming/kuchain-tag.svg';
import PrintAnimation from '../../components/PrintAnimation';

const Coming = () => {
  const [showTitle2, setShowTitle2] = useState(false);
  return (
    <div className={styles.coming}>
      <div className={styles.limit}>
        <div className={styles.left}>
          <h2>
            <PrintAnimation
              data={_t('coming.title1')}
              onComplete={() => setShowTitle2(true)}
              onStart={() => setShowTitle2(false)}
            />
            <br />
            {showTitle2 && <PrintAnimation data={_t('coming.title2')} />}
          </h2>
          <img src={tag} alt="KuChain" />
        </div>

        {/*<div className={styles.right}>*/}
        {/*  <img src={bg} alt="KuChain coming" />*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Coming;
