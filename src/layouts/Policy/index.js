import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import { _t, _tHTML } from 'utils/lang';
import storage from 'utils/storage';
import styles from './style.less';

const acceptRecord = 'fine';
const acceptKey = 'accept.policy';
const acceptPolicy = storage.getItem(acceptKey) !== acceptRecord;

const Policy = () => {
  const [visible, setVisible] = useState(acceptPolicy);

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  const handleAccept = useCallback(() => {
    storage.setItem(acceptKey, acceptRecord)
    setVisible(false);
  }, []);

  if (!visible) {
    return null;
  }
  return (
    <div className={styles.policy}>
      <div className={styles.limit}>
        <div className={styles.left}>
          <div>{_tHTML('policy.cookie')}</div>
          <div>{_tHTML('policy.privacy')}</div>
        </div>
        <Button
          size="large"
          type="primary"
          onClick={handleAccept}
        >
          {_t('policy.fine')}
        </Button>
      </div>
      <div className={styles.close} onClick={handleClose} />
    </div>
  );
};

export default Policy;
