import React, { useContext, useCallback } from 'react';
import _ from 'lodash';
import { Menu } from 'antd';
import classname from 'classname';
import { _t } from 'utils/lang';
import { Link } from 'components/Router';
import NewsList from 'components/_pages/newsPage/NewsList';
import { NewsContext } from 'src/pages/news';
import styles from './style.less';

export default (props) => {
  const { setKeyCallback, typeKey } = useContext(NewsContext);
  const { hide } = props;
  const paneData = [
    {
      tab: _t('news.all'),
      key: 'ALL',
      path: '/news/all',
    },
    {
      tab: _t('news.week'),
      key: 'WEEK',
      path: '/news/week',
    },
    {
      tab: _t('news.promotion'),
      key: 'NOTICE',
      path: '/news/notice',
    },
    {
      tab: _t('news.blog'),
      key: 'BLOG',
      path: '/news/blog',
    },
    {
      tab: _t('news.news'),
      key: 'NEWS',
      path: '/news/news',
    },
  ];

  const tabCallback = useCallback(
    (e) => {
      setKeyCallback(e.key);
    },
    [setKeyCallback],
  );

  return (
    <div
      className={classname({
        [styles.AllNews]: true,
        [styles.AllNewsHide]: hide,
      })}
    >
      <div className={styles.pc}>
        <div className={styles.menuBox}>
          <Menu onClick={tabCallback} selectedKeys={[typeKey]} mode="horizontal">
            {_.map(paneData, (item) => (
              <Menu.Item className={styles.menuItem} key={item.key}>
                <Link to={item.path}>{item.tab}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <NewsList />
      </div>
      <div className={styles.mobile}>
        <div className={styles.title}>{_t('news.latest')}</div>
        <NewsList />
      </div>
    </div>
  );
};
