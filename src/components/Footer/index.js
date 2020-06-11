import React from 'react';
import { useIsMobile } from 'components/Responsive';
// import SubscribeInput from './SubscribeInput';
import styles from './style.less';
// import f_discord from 'assets/foot/f_discord.svg';
// import f_github from 'assets/foot/f_github.svg';
// import f_reddit from 'assets/foot/f_reddit.svg';
// import f_telegram from 'assets/foot/f_telegram.svg';
// import f_twitter from 'assets/foot/f_twitter.svg';
import logo from 'assets/logo.svg';

// TODO V0.2 footer locale & policy && links
export default () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={styles.mbFoot}>
        <img src={logo} alt="KuChain" />

        {/* <div className={styles.links}>
          <a>Usage policy</a>
          <div className={styles.sep} />
          <a>Disclaimer</a>
          <div className={styles.sep} />
          <a>Privacy Agreement</a>
        </div> */}
        <div>
          CopyRight ©2017-{new Date().getFullYear()} KuChain.network
          <br />
          All Rights Reserved
        </div>
      </div>
    );
  }

  return (
    <div className={styles.foot}>
      <div className={styles.limit}>
        {/* <div className={styles.row}>
          <div className={styles.col}>
            <h5>For Users</h5>
            <a>Get to know KuChain</a>
            <a>Product architecture</a>
            <a>Community governance</a>
            <a>Common problem</a>
            <a>Latest news</a>
          </div>
          <div className={styles.col}>
            <h5>For Developers</h5>
            <a>Stay tuned …</a>
          </div>
          <div className={styles.col}>
            <h5>Community</h5>
            <a><img src={f_github} alt="GitHub"/>GitHub</a>
            <a><img src={f_reddit} alt="Reddit"/>Reddit</a>
            <a><img src={f_discord} alt="Discord"/>Discord</a>
            <a><img src={f_telegram} alt="Telegram"/>Telegram</a>
            <a><img src={f_twitter} alt="Twitter"/>Twitter</a>
          </div>
          <div>
            <h5>Get KuChain Latest News</h5>
            <SubscribeInput />
          </div>
        </div> */}

        <div className={styles.copyright}>
          <img src={logo} alt="KuChain" />
          <div className={styles.right}>
            {/* <div className={styles.links}>
              <a>Usage policy</a>
              <div className={styles.sep} />
              <a>Disclaimer</a>
              <div className={styles.sep} />
              <a>Cookie policy</a>
              <div className={styles.sep} />
              <a>Privacy Agreement</a>
            </div> */}
            <span>
              CopyRight ©2017-{new Date().getFullYear()} KuChain.network All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
