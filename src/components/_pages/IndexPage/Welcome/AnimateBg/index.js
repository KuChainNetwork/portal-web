import React, { useRef, useEffect, useCallback } from 'react';
// import { connect } from 'dva';
import styles from './style.less';
import bg from 'assets/kuchain-bg.mp4';

const AnimateBg = () => {
  const videoRef = useRef(null);
  const tsRef = useRef(null);

  useEffect(() => {
    return () => {
      if (tsRef.current) {
        clearTimeout(tsRef.current);
        tsRef.current = null;
      }
    };
  }, []);

  const handleCanPlay = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleEnd = useCallback(() => {
    if (tsRef.current) {
      clearTimeout(tsRef.current);
      tsRef.current = null;
    }
    tsRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 30000);
  }, []);

  return (
    <div className={styles.bg}>
      <video
        muted
        playsInline={false}
        autoPlay={false}
        loop={false}
        alt="kuchain.network"
        src={bg}
        ref={videoRef}
        onCanPlay={handleCanPlay}
        onEnded={handleEnd}
      />
    </div>
  );
};

export default AnimateBg;
