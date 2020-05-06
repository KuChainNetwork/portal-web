import React from 'react';
import { connect } from 'dva';
import { isEmpty } from 'lodash';
import { _t } from 'utils/lang';
import Arrow from 'components/Arrow';
import Html from 'components/Html';
import { Link } from 'components/Router';
import { showDatetime, timestamp } from 'helper';
import styles from './style.less';
import ImgSrc from 'components/ImgSrc';

const NewsDetail = props => {
  const { detailData, location } = props;

  return !isEmpty(detailData) ? (
    <div className={styles.detail}>
      <Link to={`/news/${location.query.type || 'all'}`}>
        <div className={styles.return}>
          <Arrow left={true} />
          <span>{_t('news.return')}</span>
        </div>
      </Link>

      <div className={styles.title}>{detailData.title ? detailData.title.rendered : ''}</div>
      <div className={styles.dateType}>
        {detailData.date ? showDatetime(timestamp(detailData.date)) : ''}
      </div>
      {detailData.featured_media && (
        <div className={styles.imgBox}>
          <ImgSrc featured_media={detailData.featured_media} />
        </div>
      )}
      <div className={styles.content}>
        <Html>{detailData.content ? detailData.content.rendered : ''}</Html>
      </div>
    </div>
  ) : null;
};

export default connect(state => {
  return {
    detailData: state.news.detailData,
  };
})(NewsDetail);
