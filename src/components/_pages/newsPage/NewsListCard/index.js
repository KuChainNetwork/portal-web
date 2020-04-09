import React, { useContext } from 'react';
import styles from './style.less';
import newsImg from 'assets/news/news.jpg';
import { NewsContext } from 'src/pages/news';
import Html from 'components/Html';
import { connect } from 'dva';

const NewsListCard = props => {
  const { setDetailShowCallback } = useContext(NewsContext);
  const { data, dispatch } = props;

  const _clk = () => {
    setDetailShowCallback(true);
    dispatch({
      type: 'news/update',
      payload: {
        detailData: data,
      },
    });
  };

  return (
    <div onClick={_clk} className={styles['listCard']}>
      <div className={styles['listCard-left']}>
        <img src={newsImg} alt="" />
      </div>
      <div className={styles['listCard-right']}>
        <div className={styles['title']}>{data.title.rendered}</div>
        <div className={styles['content']}>
          <Html>{data.excerpt.rendered}</Html>
        </div>
        <div className={styles['date']}>
          {data.date.replace(/^(\d{4})\-(\d{2})-(\d{2})(.*)/, '$1.$2.$3')}
        </div>
      </div>
    </div>
  );
};
export default connect(state => {
  return {};
})(NewsListCard);
