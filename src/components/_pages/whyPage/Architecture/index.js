import React, { useState } from 'react';
import { connect } from 'dva';
import Responsive from 'components/Responsive';
import { PhotoSwipe } from 'react-photoswipe';
import { _t } from 'utils/lang';
import 'react-photoswipe/lib/photoswipe.css';
import styles from './style.less';
import architeImgCN from 'assets/why/Architecture_zh_CN.png';
import architeImgUS from 'assets/why/Architecture_en_US.png';

const Architecture = props => {
  const { currentLang } = props;
  const imgSrc = currentLang === 'zh_CN' ? architeImgCN : architeImgUS;

  const [isPhotoSwipeShow, setPhotoSwipeShow] = useState(false);
  const photo = [
    {
      src: imgSrc,
      w: 1200,
      h: 400,
      title: '',
    },
  ];
  const options = {};

  return (
    <div className={styles.arch}>
      <div className={styles.title}>{_t('why.arch.title')}</div>
      {/* <div className={styles.desc}>{_t('why.arch.desc')}</div> */}
      <div className={styles.imgBox}>
        <Responsive>
          <img src={imgSrc} alt="" />
        </Responsive>

        <Responsive.Mobile>
          <img
            onClick={() => {
              setPhotoSwipeShow(true);
            }}
            src={imgSrc}
            alt=""
          />
        </Responsive.Mobile>

        <PhotoSwipe
          className="archSwipe"
          isOpen={isPhotoSwipeShow}
          items={photo}
          options={options}
          onClose={() => {
            setPhotoSwipeShow(false);
          }}
        />
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    currentLang: state.app.currentLang,
  };
})(Architecture);
