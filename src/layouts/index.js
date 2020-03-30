
import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Policy from './Policy';
import { seoInfo } from 'config';
import styles from './style.less';

function BasicLayout(props) {
  const { children, location: { pathname } } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const seoMap = seoInfo[pathname] || null;

  return (
    <div className={styles.layout}>
      {seoMap && (
        <Helmet>
          <title>{ seoMap.title }</title>
          <meta name="description" content={ seoMap.description } />
          <meta name="keywords" content={ seoMap.keywords } />
        </Helmet>
      )}
      <Header pathname={pathname} />
      <div className={styles.body}>
        {children}
      </div>
      <Footer />
      {/* // TODO 第一期移除协议 */}
      <Policy />
    </div>
  );
}

export default connect()(BasicLayout);
