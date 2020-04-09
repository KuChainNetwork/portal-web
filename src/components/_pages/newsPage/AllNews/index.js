import React, { useContext } from 'react';
import styles from './style.less';
import { Tabs } from 'antd';
import NewsList from 'components/_pages/newsPage/NewsList';
import { _t } from 'utils/lang';
import { NewsContext } from 'src/pages/news';
const { TabPane } = Tabs;

export default props => {
  const { _setKeyCallback } = useContext(NewsContext);
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

  const callback = key => {
    _setKeyCallback(key);
  };

  return (
    <div className={styles['AllNews']}>
      <div className={styles['AllNews-pc']}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          {paneData.map(item => (
            <TabPane tab={item.tab} key={item.key}>
              {item.component}
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
