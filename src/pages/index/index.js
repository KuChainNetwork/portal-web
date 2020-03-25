// import _ from 'lodash';
import React from 'react';
import 'animate.css';
import { WOW } from 'wowjs';
import Welcome from 'components/_pages/IndexPage/Welcome';
import Possible from 'components/_pages/IndexPage/Possible';
import style from './style.less';

export default class IndexPage extends React.Component {

  componentDidMount() {
    new WOW({
      offset: 10,
      mobile: false,
    }).init();
  }

  render() {
    return (
      <div className={style.indexPage}>
        <Welcome />
        <Possible />
      </div>
    );
  }
}
