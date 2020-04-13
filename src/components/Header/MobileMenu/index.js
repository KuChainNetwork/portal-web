import React, { useState, useImperativeHandle, useRef } from 'react';
import _ from 'lodash';
import styles from './style.less';
import { Drawer } from 'antd';
import classname from 'classname';
import { Link } from 'components/Router';
import { connect } from 'dva';
import { _t } from 'utils/lang';
import mMenuIcon from 'assets/header/icon_menu.svg';

const MobileMenu = React.forwardRef((props, ref) => {
  const { rightMenus, pathname, langs, currentLang, dispatch } = props;
  const [show, setShow] = useState(false);
  const [langShow, setLangShow] = useState(false);

  const _show = () => {
    setShow(true);
  };

  const _close = () => {
    setShow(false);
  };

  useImperativeHandle(ref, () => ({
    _show,
  }));

  const _langShow = () => {
    setLangShow(true);
  };

  const _langclose = () => {
    setLangShow(false);
  };

  const _selectLang = val => {
    dispatch({
      type: 'app/selectLang',
      payload: {
        lang: val,
      },
    });
    _langclose();
  };

  return (
    <>
      <img onClick={_show} src={mMenuIcon} alt="" />
      <Drawer
        className={styles['menuDrawer']}
        placement="right"
        closable={true}
        onClose={_close}
        visible={show}
      >
        <div className={styles['menuContent']}>
          {_.map(rightMenus, item => {
            const { path, title, pc, icon } = item;
            const cls = classname({
              [styles.menu]: true,
              [styles.active]: pathname === path,
            });
            return pc ? null : (
              <Link onClick={_close} key={path} to={path} className={cls}>
                <img src={require(`assets/header/${icon}.svg`)} alt="" />
                <span>{title}</span>
              </Link>
            );
          })}
          <div onClick={_langShow} className={styles['menu']}>
            <img src={require(`assets/header/icon_lang.svg`)} alt="" />
            <span>{langs.find(item => item.key === currentLang).label}</span>
          </div>
          <Drawer
            className={styles['langDrawer']}
            width="100%"
            title={_t('head.mobile.title')}
            placement="right"
            onClose={_langclose}
            visible={langShow}
          >
            <div className={styles['slectLang']}>
              {_.map(langs, item => (
                <div
                  onClick={() => {
                    _selectLang(item.key);
                  }}
                  className={styles['slectLang-item']}
                  key={item.key}
                >
                  <div className={styles['slectLang-item-left']}>{item.label}</div>
                  <div className={styles['slectLang-item-right']}>
                    {item.key === currentLang && (
                      <img src={require(`assets/header/icon_select.svg`)} alt="" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Drawer>
        </div>
      </Drawer>
    </>
  );
});

export default connect(
  state => {
    return {
      langs: state.app.langs,
      currentLang: state.app.currentLang,
    };
  },
  null,
  null,
  { forwardRef: true },
)(MobileMenu);
