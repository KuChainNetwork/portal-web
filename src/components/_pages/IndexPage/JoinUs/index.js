import _ from 'lodash';
import React from 'react';
import { _t } from 'utils/lang';
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
      title: _t('join.discord'),
      des: _t('join.discord.des'),
      recommend: true,
    },
    {
      icon: join_reddit,
      title: _t('join.reddit'),
      des: _t('join.reddit.des'),
    },
    {
      icon: join_gitHub,
      title: _t('join.github'),
      des: _t('join.github.des'),
    },
    {
      icon: join_telegram,
      title: _t('join.telegram'),
      des: _t('join.telegram.des'),
    },
    {
      icon: join_twitter,
      title: _t('join.twitter'),
      des: _t('join.twitter.des'),
    },
  ];

  return (
    <div className={styles.joinus}>
      <div className={styles.limit}>
        <h2>{_t('join.title')}</h2>

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
                      <div className={styles.recommend}>{_t('join.recommend')}</div>
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
