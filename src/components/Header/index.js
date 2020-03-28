import React from 'react';
import _ from 'lodash';
import classname from 'classname';
import { Link } from 'components/Router';
import Responsive from 'components/Responsive';
import LangSelector from './LangSelector';
import { _t } from 'utils/lang';
import styles from './style.less';
import logo from 'assets/logo.svg';

// TODO sidebar
const Header = ({ pathname }) => {
  const rightMenus = [
    {
      title: _t('head.menu.tech'),
      path: '/technology',
    },
    {
      title: _t('head.menu.news'),
      path: '/news',
    },
    {
      title: _t('head.menu.about'),
      path: '/about',
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
              side
            </Responsive.Mobile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
