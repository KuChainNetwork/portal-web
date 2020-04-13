import React from 'react';
import classname from 'classname';
// import { connect } from 'dva';
import styles from './style.less';

const Arrow = ({ className, disabled, left, ...otherProps }) => {
  return (
    <div
      className={classname({
        [styles.arrow]: true,
        [className]: true,
        [styles.ArrowLeft]: left,
        [styles.ArrowRight]: !left,
        [styles.disabledArrow]: disabled,
      })}
      {...otherProps}
    >
      <div
        className={classname({
          [styles.line]: true,
          [styles.disabledArrowLine]: disabled,
        })}
      />
    </div>
  );
};

export default Arrow;
