import React, { useEffect, useMemo } from 'react';
import { connect } from 'dva';
import { Helmet } from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';
// import Policy from './Policy';
import { _t } from 'utils/lang';
import styles from './style.less';

// TODO V0.2 footer pathname
function BasicLayout(props) {
  const {
    children,
    currentLang,
    location: { pathname },
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const seoMap = useMemo(() => {
    const seoInfo = {
      // common info
      _: {
        title: _t('seo.common.title'),
        description: _t('seo.common.des'),
        keywords: _t('seo.common.keywords'),
      },
    };

    return {
      ...seoInfo._,
      ...(seoInfo[pathname] || {}),
    };
  }, [currentLang, pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.layout}>
      {seoMap && (
        <Helmet>
          <title>{seoMap.title}</title>
          <meta name="description" content={seoMap.description} />
          <meta name="keywords" content={seoMap.keywords} />
        </Helmet>
      )}
      <Header pathname={pathname} />
      <div className={styles.body}>{children}</div>

      <Footer />
      {/* // TODO V0.2 Policy */}
      {/* <Policy /> */}
    </div>
  );
}

export default connect((state) => {
  return {
    currentLang: state.app.currentLang,
  };
})(BasicLayout);
