import React, { useContext, useCallback, useMemo } from 'react';
import { connect } from 'dva';
import { Link } from 'components/Router';
import Html from 'components/Html';
import ImgSrc from 'components/ImgSrc';
import { NewsContext } from 'src/pages/news';
import { showDatetime, timestamp } from 'helper';
import styles from './style.less';

const NewsListCard = props => {
  const { location } = useContext(NewsContext);
  const { data, dispatch } = props;

  const cardClick = useCallback(() => {
    dispatch({
      type: 'news/update',
      payload: {
        detailData: data,
      },
    });
  }, [data, dispatch]);

  const type = useMemo(() => location.pathname.replace(/\/news\/?/gi, '') || 'all', [location]);

  return (
    <Link to={`/news/detail/${data.id}?type=${type}`}>
      <div onClick={cardClick} className={styles.listCard}>
        <div className={styles.left}>
          <ImgSrc featured_media={data.featured_media} />
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <div className={styles.title}>{data.title ? data.title.rendered : ''}</div>
            <div className={styles.content}>
              <Html>{data.excerpt ? data.excerpt.rendered : ''}</Html>
            </div>
          </div>
          <div className={styles.rightBottom}>
            <div className={styles.date}>{data.date ? showDatetime(timestamp(data.date)) : ''}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default connect(state => {
  return {};
})(NewsListCard);
