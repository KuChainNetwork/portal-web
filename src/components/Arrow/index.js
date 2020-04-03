import React from 'react';
import classname from 'classname';
// import { connect } from 'dva';
import styles from './style.less';

const Arrow = ({ className, directionCls, ...otherProps }) => {
  return (
    <div
      className={classname([styles.arrow, className, directionCls ? styles[directionCls] : ''])}
      {...otherProps}
    >
      <div className={styles.line} />
    </div>
  );
};

export default Arrow;
