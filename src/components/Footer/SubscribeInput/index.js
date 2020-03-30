import React, { useState, useCallback } from 'react';
import { Input, Button } from 'antd';
import { mailchimpSubscribe } from 'config';
import styles from './style.less';

const { formAction, hiddenName } = mailchimpSubscribe;

// TODO config
const SubscribeInput = () => {
  const [value, setValue] = useState(undefined);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form
      className={styles.input}
      action={formAction}
      method="POST"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <Input
        size="large"
        placeholder="Input Your Email"
        name="EMAIL"
        value={value}
        onChange={handleChange}
      />
      <input type="hidden" name={hiddenName} tabIndex="-1" value="" />
      <Button
        size="large"
        type="primary"
        htmlType="submit"
        name="subscribe"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default SubscribeInput;
