import React, { useContext } from 'react';
import _ from 'lodash';
import styles from './style.less';
import { Tabs } from 'antd';
import classname from 'classname';
import NewsList from 'components/_pages/newsPage/NewsList';
import { _t } from 'utils/lang';
import { NewsContext } from 'src/pages/news';
const { TabPane } = Tabs;

export default props => {
  const { setKeyCallback, typeKey } = useContext(NewsContext);
  const { hide } = props;
  const paneData = [
    {
      tab: _t('news.all'),
      component: <NewsList />,
      key: 'ALL',
    },
    {
      tab: _t('news.week'),
      component: <NewsList />,
      key: 'WEEK',
    },
    {
      tab: _t('news.promotion'),
      component: <NewsList />,
      key: 'NOTICE',
    },
    {
      tab: _t('news.blog'),
      component: <NewsList />,
      key: 'BLOG',
    },
    {
      tab: _t('news.news'),
      component: <NewsList />,
      key: 'NEWS',
    },
  ];

  const tabCallback = key => {
    setKeyCallback(key);
  };

  return (
    <div
      className={classname({
        [styles.AllNews]: true,
        [styles.AllNewsHide]: hide,
      })}
    >
      <div className={styles['AllNews-pc']}>
        <Tabs defaultActiveKey="1" onChange={tabCallback}>
          {_.map(paneData, item => (
            <TabPane tab={item.tab} key={item.key}>
              {typeKey === item.key ? item.component : null}
            </TabPane>
          ))}
        </Tabs>
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
