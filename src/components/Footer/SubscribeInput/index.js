import React, { useState, useCallback } from 'react';
import { Input, Button } from 'antd';
import styles from './style.less';

const SubscribeInput = () => {
  const [value, setValue] = useState(undefined);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form
      className={styles.input}
      action="https://network.us19.list-manage.com/subscribe/post?u=62053eb433ce5c9c4f226590f&amp;id=1bd3042b54"
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
      <input type="hidden" name="b_62053eb433ce5c9c4f226590f_1bd3042b54" tabIndex="-1" value="" />
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
