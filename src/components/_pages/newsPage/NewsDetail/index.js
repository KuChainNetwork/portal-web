import React from 'react';
import styles from './style.less';
import Arrow from 'components/Arrow';
import { _t } from 'utils/lang';
import { connect } from 'dva';
import Html from 'components/Html';
import ImgSrc from 'components/ImgSrc';
import { isEmpty } from 'lodash';
import router from 'umi/router';

const NewsDetail = props => {
  const { detailData } = props;

  return !isEmpty(detailData) ? (
    <div className={styles['detail']}>
      <div
        onClick={() => {
          router.goBack();
        }}
        className={styles['detail-return']}
      >
        <Arrow left={true} />
        <span>{_t('news.return')}</span>
      </div>
      <div className={styles['detail-title']}>{detailData.title.rendered}</div>
      <div className={styles['detail-dateType']}>{new Date(detailData.date).toLocaleString()}</div>
      {detailData.featured_media && (
        <div className={styles['detail-imgBox']}>
          <ImgSrc featured_media={detailData.featured_media} />
        </div>
      )}
      <div className={styles['detail-content']}>
        <Html>{detailData.content.rendered}</Html>
      </div>
    </div>
  ) : null;
};

export default connect(state => {
  return {
    detailData: state.news.detailData,
  };
})(NewsDetail);
