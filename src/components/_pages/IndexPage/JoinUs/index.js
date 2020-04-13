import _ from 'lodash';
import React from 'react';
import { _t } from 'utils/lang';
import { Menu, Dropdown } from 'antd';
import styles from './style.less';
import join_discord from 'assets/join/contact-discord.svg';
// import join_reddit from 'assets/join/contact-reddit.svg';
import join_gitHub from 'assets/join/contact-github.svg';
import join_telegram from 'assets/join/contact-telegram.svg';
import join_twitter from 'assets/join/contact-twitter.svg';

const TitleNode = ({ title, link }) => {
  let titleNode = null;
  if (link && typeof link === 'string') {
    titleNode = (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h5>{ title }</h5>
      </a>
    );
  } else
  if (link && _.isArray(link)) {
    const menu = (
      <Menu>
        {_.map(link, ([title, href], idx) => {
          return (
            <Menu.Item key={idx}>
              <a target="_blank" rel="noopener noreferrer" href={href}>
                {title}
              </a>
            </Menu.Item>
          );
        })}
      </Menu>
    );

    titleNode = (
      <Dropdown
        overlay={menu}
        trigger={['click']}
        placement="topCenter"
      >
        <h5 style={{ cursor: 'pointer' }}>{ title }</h5>
      </Dropdown>
    );
  } else {
    titleNode = (
      <h5>{ title }</h5>
    );
  }

  return titleNode;
};

const JoinUs = () => {
  const contacts = [
    {
      icon: join_discord,
      title: _t('join.discord'),
      des: _t('join.discord.des'),
      link: 'https://discord.gg/sp79pa',
      recommend: true,
    },
    // {
    //   icon: join_reddit,
    //   title: _t('join.reddit'),
    //   des: _t('join.reddit.des'),
    //   link: '', // TODO V0.2 reddit
    // },
    {
      icon: join_gitHub,
      title: _t('join.github'),
      des: _t('join.github.des'),
      link: 'https://github.com/KuChainNetwork',
    },
    {
      icon: join_telegram,
      title: _t('join.telegram'),
      des: _t('join.telegram.des'),
      link: [
        ['中文 Telegram', 'https://t.me/KuChainOfficialChineseCommunity'],
        ['English Telegram', 'https://t.me/KuChainOfficialEnglishCommunity'],
      ],
    },
    {
      icon: join_twitter,
      title: _t('join.twitter'),
      des: _t('join.twitter.des'),
      link: 'https://twitter.com/KuChainOfficia',
    },
  ];

  return (
    <div className={styles.joinus}>
      <div className={styles.limit}>
        <h2>{_t('join.title')}</h2>

        <div className={styles.contacts}>
          {_.map(contacts, ({ icon, title, des, link, recommend }, idx) => {

            return (
              <div key={idx} className={styles.contact}>
                <div className={styles.icon}>
                  <img src={icon} alt={title} />
                </div>
                <div className={styles.info}>
                  <div className={styles.title}>
                    <TitleNode title={title} link={link} />
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
