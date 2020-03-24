import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Helmet } from 'react-helmet';
import classname from 'classname';
import { Icon, Popover } from 'antd';
import { Link } from 'components/Router';
import Footer from 'components/Footer';
import { seoInfo } from 'config';
import styles from './style.less';
// import logo from 'assets/kulogo.svg';
// import logoHover from 'assets/kulogo_hover.svg';
// import arrowIcon from 'assets/prods/arrowdown.svg';

// import { Affix } from 'antd';

const menus = [

];

const rightMenus = [

];


function BasicLayout(props) {
  const { children, location: { pathname }, currentHash } = props;

  const [hoverLogo, setHoverLogo] = useState(false);
  // alert(hash);
  // const isHeadTransparent = _.indexOf(['/'], pathname) > -1 && (!hash || hash === '#welcome');

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
      <div className={styles.affix}>
      {/* <Affix offsetTop={0} className={styles.affix}> */}
        {/* <div className={styles.head} data-theme={isHeadTransparent ? 'transparent' : undefined}> */}
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <a href="/" className={styles.logo}>
              {/* <img src={logo} data-role="pre-load" style={{ display: 'none' }} alt="pre-load" />
              <img src={logoHover} data-role="pre-load" style={{ display: 'none' }} alt="pre-load" /> */}
              {/* <img
                src={hoverLogo ? logoHover : logo}
                onMouseEnter={() => setHoverLogo(true)}
                onMouseLeave={() => setHoverLogo(false)}
                alt="KuChain"
              /> */}
            </a>
            <React.Fragment>
              {_.map(menus, ({ key, title, submenus }) => {
                const isActive = currentHash === `#${key}`;
                const cls = classname({
                  [styles.menu]: true,
                  [styles.active]: isActive,
                });

                const hasSubmenus = submenus && submenus.length;

                let menu = (
                  <a
                    onClick={() => {
                      if(pathname !== '/') {
                        window.location.href = `${window.location.origin}/#${key}`;
                      } else {
                        window.location.hash = `#${key}`;
                      }
                    }}
                    // href={`#${key}`}
                    key={key}
                    className={cls}
                  >
                    { title }
                    {hasSubmenus && <Icon type="down" style={{ fontSize: 12, marginLeft: 8 }} />}
                  </a>
                );

                if (hasSubmenus) {
                  let preLinks = [];
                  const submenuContent = (
                    <div className={styles.submenuContent}>
                      {_.map(submenus, (item) => {
                        const linkComp = (
                          <Link key={item.key} to={item.link}>
                            {item.title}
                          </Link>
                        );
                        preLinks.push(linkComp);
                        return linkComp;
                      })}
                    </div>
                  );
                  menu = (
                    <Popover
                      key={key}
                      title={null}
                      content={submenuContent}
                      placement="bottomLeft"
                      overlayClassName={styles.submenu}
                    >
                      <div>
                        <div style={{ display: 'none' }}>{preLinks}</div>
                        {menu}
                      </div>
                    </Popover>
                  );
                }

                return menu;
              })}
            </React.Fragment>
          </div>
          <div className={styles.headRight}>
            <React.Fragment>
              {_.map(rightMenus, ({ path, title }) => {
                const cls = classname({
                  [styles.menu]: true,
                  [styles.active]: pathname.indexOf(path) === 0,
                });
                return (
                  <Link key={path} to={path} className={cls}>{ title }</Link>
                );
              })}
            </React.Fragment>
          </div>
        </div>
      </div>
      {/* </Affix> */}
      <div className={styles.body}>
        {children}
      </div>
      {
        pathname === '/' ? null : <Footer />
      }
    </div>
  );
}

export default connect((state) => {
  return {
    currentHash: state.app.currentHash,
  };
})(BasicLayout);
