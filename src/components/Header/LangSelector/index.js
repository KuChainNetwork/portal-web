import _ from 'lodash';
import React from 'react';
import { connect } from 'dva';
import { Dropdown, Menu, Icon } from 'antd';
import styles from './style.less';

@connect((state) => {
  return {
    langs: state.app.langs,
    currentLang: state.app.currentLang,
  };
})
class LangSelector extends React.Component {
  handleChange = ({ key }) => {
    const { dispatch } = this.props;
    // console.log(key);
    dispatch({
      type: 'app/selectLang',
      payload: {
        lang: key,
      },
    });
  };

  getPopupContainer = () => {
    return document.getElementById('lang_selector');
  };

  render() {
    const { langs, currentLang } = this.props;

    const menu = (
      <Menu onClick={this.handleChange}>
        {_.map(langs, ({ key, label }) => {
          return <Menu.Item key={key}>{label}</Menu.Item>;
        })}
      </Menu>
    );

    const currentLangItem = langs.filter(({ key }) => {
      return currentLang === key;
    })[0];

    return (
      <Dropdown overlay={menu} getPopupContainer={this.getPopupContainer}>
        <div className={styles.cursor}>
          {currentLangItem.label} <Icon type="caret-down" />
        </div>
      </Dropdown>
    );
  }
}

const WrapContainer = ({ className }) => {
  return (
    <div id="lang_selector" className={className}>
      <LangSelector />
    </div>
  );
};

export default WrapContainer;
