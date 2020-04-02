import React from 'react';
import _ from 'lodash';
import classname from 'classname';
import { Link } from 'components/Router';
import Responsive from 'components/Responsive';
import LangSelector from './LangSelector';
import { _t } from 'utils/lang';
import styles from './style.less';
import logo from 'assets/logo.svg';

// TODO V0.2 sidebar
const Header = ({ pathname }) => {
  const rightMenus = [
    {
      title: _t('head.menu.whykuchain'),
      path: '/why-kuchain',
    },
    {
      title: _t('head.menu.news'),
      path: '/news',
    },
    // {
    //   title: _t('head.menu.community'),
    //   path: '/community',
    // },
    {
      title: _t('head.menu.blog'),
      path: '/blog',
    },
  ];

  return (
    <div className={styles.affix}>
      <div className={styles.head}>
        <div className={styles.limit}>

          <div className={styles.headLeft}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="KuChain" />
            </Link>
          </div>
          <div className={styles.headRight}>
            <Responsive>
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

              <div className={styles.langSelect}>
                <LangSelector />
              </div>
            </Responsive>

            <Responsive.Mobile>
              <div className={styles.langSelectMb}>
                <LangSelector />
              </div>
            </Responsive.Mobile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
