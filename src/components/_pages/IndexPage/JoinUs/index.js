import _ from 'lodash';
import React from 'react';
import classname from 'classname';
import styles from './style.less';
import join_discord from 'assets/join/contact-discord.svg';
import join_reddit from 'assets/join/contact-reddit.svg';
import join_gitHub from 'assets/join/contact-github.svg';
import join_telegram from 'assets/join/contact-telegram.svg';
import join_twitter from 'assets/join/contact-twitter.svg';

const JoinUs = () => {
  const contacts = [
    {
      icon: join_discord,
      title: 'Discord',
      des: 'Discuss with KuChain developers.',
      recommend: true,
    },
    {
      icon: join_reddit,
      title: 'Reddit',
      des: 'R / KuChain.',
    },
    {
      icon: join_gitHub,
      title: 'GitHub',
      des: 'Contribute source code for KuChain.',
    },
    {
      icon: join_telegram,
      title: 'Telegram',
      des: 'Join the KuChain Telegram community.',
    },
    {
      icon: join_twitter,
      title: 'Twitter',
      des: 'Follow Twitter @KuChain.',
    },
  ];

  return (
    <div className={styles.joinus}>
      <div className={styles.limit}>
        <h2>Join Us</h2>

        <div className={styles.contacts}>
          {_.map(contacts, ({ icon, title, des, recommend }, idx) => {

            return (
              <div key={idx} className={styles.contact}>
                <div className={styles.icon}>
                  <img src={icon} alt={title} />
                </div>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <h5>{ title }</h5>
                    {recommend && (
                      <div className={styles.recommend}>Recommend</div>
                    )}
                  </div>
                  <div className={styles.des}>{ des }</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
