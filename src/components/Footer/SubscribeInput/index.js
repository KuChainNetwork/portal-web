import React from 'react';
import { Input, Button } from 'antd';
import styles from './style.less';

const SubscribeInput = () => {
  return (
    <div className={styles.input}>
      <Input
        size="large"
        placeholder="Input Your Email"
      />
      <Button
        size="large"
        type="primary"
      >
        Subscribe
      </Button>
    </div>
  );
};

export default SubscribeInput;
