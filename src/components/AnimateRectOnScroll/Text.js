import React, { useImperativeHandle, useRef, useState } from 'react';
// import { connect } from 'dva';
import styles from './style.less';

const Text = ({ children }, ref) => {
  const [maskPer, setMaskPer] = useState(0);
  const titleRef = useRef(null);

  useImperativeHandle(ref, () => ({
    onAnimateScroll: (w) => {
      if (titleRef.current) {
        const { left, right } = titleRef.current.getBoundingClientRect();
        const per = (w - left) / (right - left);
        setMaskPer((per < 0 ? 0 : (per > 1 ? 1 : per)) * 100);
      }
    }
  }), []);

  return (
    <div
      className={styles.text}
      ref={titleRef}
      style={{
        backgroundImage: `linear-gradient(to right, #fff 0,#fff ${maskPer}%,#000 ${maskPer}%,#000 100%)`,
      }}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(Text);
