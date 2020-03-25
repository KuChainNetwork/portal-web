import React, { useEffect, useCallback, useRef, useState } from 'react';
// import { connect } from 'dva';
import Text from './Text';
import { Event, getWindowRectHeight } from 'helper';
import styles from './style.less';

const AnimateRectOnScroll = ({ limitWidth = 400, offset = 100, style = {}, onScroll }) => {
  const [changeWidth, setWidth] = useState(0);

  const animateRef = useRef(null);
  const handleScroll = useCallback(() => {
    if (animateRef.current) {
      const winRectHeight = getWindowRectHeight();
      const { top, bottom } = animateRef.current.getBoundingClientRect();
      const per1 = (winRectHeight - offset - bottom) / (winRectHeight - offset * 2);
      const per2 = (winRectHeight - offset - top) / (winRectHeight - offset * 2);
      const min = Math.min(per1, per2);
      const max = Math.max(per1, per2);

      const per = min < 0 ? min : max;

      let width;
      if (per > 1) {
        width = limitWidth;
      } else
      if (per < 0) {
        width = 0;
      } else {
        width = per * limitWidth;
      }

      setWidth(width);
      if (typeof onScroll === 'function') {
        onScroll(width);
      }
    }
  }, [offset, onScroll, limitWidth]);

  useEffect(() => {
    Event.addHandler(window, 'scroll', handleScroll);

    return () => {
      Event.removeHandler(window, 'scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={styles.animate}
      ref={animateRef}
      style={{
        ...style,
        width: changeWidth,
      }}
    />
  );
};

AnimateRectOnScroll.Text = Text;

export default AnimateRectOnScroll;
