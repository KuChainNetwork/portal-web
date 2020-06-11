// import _ from 'lodash';
import React from 'react';
import 'animate.css';
import { WOW } from 'wowjs';
// import Welcome from 'components/_pages/IndexPage/Welcome';
// import ForUser from 'components/_pages/IndexPage/ForUser';
// import Developer from 'components/_pages/IndexPage/Developer';
// import LatestNews from 'components/_pages/IndexPage/LatestNews';
// import JoinUs from 'components/_pages/IndexPage/JoinUs';
import style from './style.less';
import Coming from '../coming';

export default class IndexPage extends React.Component {
  componentDidMount() {
    new WOW({
      offset: 10,
      mobile: false,
    }).init();
  }

  // TODO V0.2 News
  render() {
    return (
      <div className={style.indexPage}>
        <Coming />
        {/*<Welcome />*/}
        {/*<ForUser />*/}
        {/*<Developer />*/}
        {/* <LatestNews /> */}
        {/*<JoinUs />*/}
      </div>
    );
  }
}
