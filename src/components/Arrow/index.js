import React from 'react';
import classname from 'classname';
// import { connect } from 'dva';
import styles from './style.less';

const Arrow = ({ className, ...otherProps }) => {
  return (
    <div
      className={classname([styles.arrow, className])}
      {...otherProps}
    >
      <div className={styles.line} />
    </div>
  );
};

export default Arrow;
