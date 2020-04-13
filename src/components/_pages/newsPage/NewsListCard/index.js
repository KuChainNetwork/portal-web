import React, { useContext, useCallback } from 'react';
import { connect } from 'dva';
import Html from 'components/Html';
import ImgSrc from 'components/ImgSrc';
import { NewsContext } from 'src/pages/news';
import { showDatetime, timestamp } from 'helper';
import styles from './style.less';

const NewsListCard = props => {
  const { pageToDetail } = useContext(NewsContext);
  const { data, dispatch } = props;

  const cardClick = useCallback(() => {
    dispatch({
      type: 'news/update',
      payload: {
        detailData: data,
      },
    });
    pageToDetail(data.id);
  }, [data, dispatch, pageToDetail]);

  return (
    <div onClick={cardClick} className={styles.listCard}>
      <div className={styles.left}>
        <ImgSrc featured_media={data.featured_media} />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>{data.title ? data.title.rendered : ''}</div>
        <div className={styles.content}>
          <Html>{data.excerpt ? data.excerpt.rendered : ''}</Html>
        </div>
        <div className={styles.date}>{data.date ? showDatetime(timestamp(data.date)) : ''}</div>
      </div>
    </div>
  );
};
export default connect(state => {
  return {};
})(NewsListCard);
