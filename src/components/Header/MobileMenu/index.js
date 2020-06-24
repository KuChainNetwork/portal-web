import React, { useState, useCallback } from 'react';
import _ from 'lodash';
import { Drawer } from 'antd';
import classname from 'classname';
import { Link } from 'components/Router';
import { connect } from 'dva';
import { _t } from 'utils/lang';
import styles from './style.less';
import mMenuIcon from 'assets/header/icon_menu.svg';
import selectIcon from 'assets/header/icon_select.svg';
import langIcon from 'assets/header/icon_lang.svg';
import icon_index from 'assets/header/icon_index.svg';
import icon_why from 'assets/header/icon_why.svg';
import icon_news from 'assets/header/icon_news.svg';

const iconPatams = {
  icon_index,
  icon_why,
  icon_news,
};

const MobileMenu = (props) => {
  const { rightMenus, pathname, langs, currentLang, dispatch } = props;
  const [show, setShow] = useState(false);
  const [langShow, setLangShow] = useState(false);

  const _show = useCallback(() => {
    setShow(true);
  }, []);

  const _close = useCallback(() => {
    setShow(false);
  }, []);

  const _langShow = useCallback(() => {
    setLangShow(true);
  }, []);

  const _langclose = useCallback(() => {
    setLangShow(false);
  }, []);

  const _selectLang = useCallback(
    (val) => {
      dispatch({
        type: 'app/selectLang',
        payload: {
          lang: val,
        },
      });
      _langclose();
    },
    [_langclose, dispatch],
  );

  return (
    <>
      <img onClick={_show} src={mMenuIcon} alt="" />
      <Drawer
        className={styles.menuDrawer}
        placement="right"
        closable={true}
        onClose={_close}
        visible={show}
      >
        <div className={styles.menuContent}>
          {_.map(rightMenus, (item) => {
            const { path, title, pc, icon, href } = item;
            const cls = classname({
              [styles.menu]: true,
              [styles.active]: pathname === path,
            });
            return pc ? null : href ? (
              <a className={cls} href={path} key={path} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              <Link onClick={_close} key={path} to={path} className={cls}>
                <img src={iconPatams[icon]} alt="" />
                <span>{title}</span>
              </Link>
            );
          })}
          <div onClick={_langShow} className={styles.menu}>
            <img src={langIcon} alt="" />
            <span>{langs.find((item) => item.key === currentLang).label}</span>
          </div>
          <Drawer
            className={styles.langDrawer}
            width="100%"
            title={_t('head.mobile.title')}
            placement="right"
            onClose={_langclose}
            visible={langShow}
          >
            <div className={styles.slectLang}>
              {_.map(langs, (item) => (
                <div
                  onClick={() => {
                    _selectLang(item.key);
                  }}
                  className={styles.item}
                  key={item.key}
                >
                  <div className={styles.left}>{item.label}</div>
                  <div className={styles.right}>
                    {item.key === currentLang && <img src={selectIcon} alt="" />}
                  </div>
                </div>
              ))}
            </div>
          </Drawer>
        </div>
      </Drawer>
    </>
  );
};

export default connect((state) => {
  return {
    langs: state.app.langs,
    currentLang: state.app.currentLang,
  };
})(MobileMenu);
