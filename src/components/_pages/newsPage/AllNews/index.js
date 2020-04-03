import React from 'react';
import styles from './style.less';
import { Tabs } from 'antd';
import NewsList from 'components/_pages/newsPage/NewsList';
const { TabPane } = Tabs;

export default props => {
  const _setDetailShowCallback = props._setDetailShowCallback;
  const paneData = [
    {
      tab: '全部',
      component: <NewsList _setDetailShowCallback={_setDetailShowCallback} />,
      key: '1',
    },
    {
      tab: '周报',
      component: <NewsList _setDetailShowCallback={_setDetailShowCallback} />,
      key: '2',
    },
    {
      tab: '活动',
      component: <NewsList _setDetailShowCallback={_setDetailShowCallback} />,
      key: '3',
    },
    {
      tab: '博客',
      component: <NewsList _setDetailShowCallback={_setDetailShowCallback} />,
      key: '4',
    },
  ];
  function callback(key) {
    console.log(key);
  }
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
        <div className={styles['AllNews-mobile-title']}>最新新闻</div>
        <div className={styles['AllNews-mobile-main']}>
          <NewsList _setDetailShowCallback={_setDetailShowCallback} />
        </div>
      </div>
    </div>
  );
};
