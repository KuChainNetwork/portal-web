import React from 'react';
import classname from 'classname';
// import { connect } from 'dva';
import styles from './style.less';

const Arrow = ({ className, disabled, left, ...otherProps }) => {
  return (
    <div
      className={classname([
        styles.arrow,
        className,
        styles[left ? 'ArrowLeft' : ''],
        styles[disabled ? 'disabledArrow' : ''],
      ])}
      {...otherProps}
    >
      <div className={classname([styles.line, styles[disabled ? 'disabledArrowLine' : '']])} />
    </div>
  );
};

export default Arrow;
