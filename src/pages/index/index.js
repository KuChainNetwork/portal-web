import _ from 'lodash';
import React from 'react';
import 'animate.css';
import Welcome from 'components/_pages/IndexPage/Welcome';
import style from './style.less';

export default class IndexPage extends React.Component {

  render() {
    return (
      <div className={style.indexPage}>
        <Welcome />
      </div>
    );
  }
}
