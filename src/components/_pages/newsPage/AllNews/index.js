import React, { useContext, uesCallback } from 'react';
import _ from 'lodash';
import styles from './style.less';
import { Menu } from 'antd';
import classname from 'classname';
import NewsList from 'components/_pages/newsPage/NewsList';
import { _t } from 'utils/lang';
import { NewsContext } from 'src/pages/news';

export default props => {
  const { setKeyCallback, typeKey } = useContext(NewsContext);
  const { hide } = props;
  const paneData = [
    {
      tab: _t('news.all'),
      key: 'ALL',
    },
    {
      tab: _t('news.week'),
      key: 'WEEK',
    },
    {
      tab: _t('news.promotion'),
      key: 'NOTICE',
    },
    {
      tab: _t('news.blog'),
      key: 'BLOG',
    },
    {
      tab: _t('news.news'),
      key: 'NEWS',
    },
  ];

  const tabCallback = e => {
    setKeyCallback(e.key);
  };

  return (
    <div
      className={classname({
        [styles.AllNews]: true,
        [styles.AllNewsHide]: hide,
      })}
    >
      <div className={styles['AllNews-pc']}>
        <div className={styles.menuBox}>
          <Menu onClick={tabCallback} selectedKeys={[typeKey]} mode="horizontal">
            {_.map(paneData, item => (
              <Menu.Item key={item.key}>{item.tab}</Menu.Item>
            ))}
          </Menu>
        </div>
        <NewsList />
      </div>
      <div className={styles['AllNews-mobile']}>
        <div className={styles['AllNews-mobile-title']}>{_t('news.latest')}</div>
        <div className={styles['AllNews-mobile-main']}>
          <NewsList />
        </div>
      </div>
    </div>
  );
};
