import React, { useEffect, useState } from 'react';
import style from './style.less';
import { Button, Dropdown, Input, Menu, message, Modal } from 'antd';
import _ from 'lodash';
import { _t } from 'utils/lang';
import join_discord from 'assets/join/contact-discord.svg';
import join_gitHub from 'assets/join/contact-github.svg';
import { connect } from 'react-redux';
import { showDateTimeByZone } from '../../helper';

const TitleNode = ({ title, link }) => {
  let titleNode = null;
  if (link && typeof link === 'string') {
    titleNode = (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h5>{title}</h5>
      </a>
    );
  } else if (link && _.isArray(link)) {
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
      <Dropdown overlay={menu} trigger={['click']} placement="topCenter">
        <h5 style={{ cursor: 'pointer' }}>{title}</h5>
      </Dropdown>
    );
  } else {
    titleNode = <h5>{title}</h5>;
  }

  return titleNode;
};

const ApplyFunds = function ({ dispatch, loading }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState('');
  const [txhash, setTxhash] = useState('');

  const contacts = [
    {
      icon: join_discord,
      title: _t('join.discord'),
      des: _t('join.discord.des'),
      link: 'https://discord.gg/sp79pa',
      recommend: true,
    },
    {
      icon: join_gitHub,
      title: _t('join.github'),
      des: _t('join.github.des'),
      link: 'https://github.com/KuChainNetwork',
    },
  ];

  const clickApply = async () => {
    if (!address || !address.trim()) {
      message.error(_t('apply.funds.input.placeholder'));
      return;
    }
    const result = await dispatch({
      type: 'faucet/postApply',
      payload: { receiver: address.trim() },
    });
    if (result.success) {
      setTxhash(result.data);
      setModalVisible(true);
    } else {
      if (result.code === 200002) {
        const seconds = 24 * 60 * 60 * 1000 - (Date.now() - result.data);
        message.error(
          _t('apply.funds.submit.error.tips1', {
            timeStr: showDateTimeByZone(seconds, 'HH:mm:ss', 0),
          }),
        );
      } else {
        message.error(_t('apply.funds.submit.error.tips2'));
      }
    }
  };

  return (
    <div className={style.applyFundsBox}>
      <div className={style.inner}>
        <h2>{_t('apply.funds.title')}</h2>
        <Input
          className={style.input}
          placeholder={_t('apply.funds.input.placeholder')}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onPressEnter={clickApply}
        />
        <Button
          className={style.button}
          type="primary"
          onClick={clickApply}
          loading={loading.effects['faucet/postApply']}
        >
          {_t('apply.funds.button')}
        </Button>
        <div className={style.contacts}>
          {_.map(contacts, ({ icon, title, des, link, recommend }, idx) => {
            return (
              <div key={idx} className={style.contact}>
                <div className={style.icon}>
                  <img src={icon} alt={title} />
                </div>
                <div className={style.info}>
                  <div className={style.title}>
                    <TitleNode title={title} link={link} />
                    {recommend && <div className={style.recommend}>{_t('join.recommend')}</div>}
                  </div>
                  <div className={style.des}>{des}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        width="480px"
        onCancel={() => setModalVisible(false)}
        title={_t('apply.funds.modal.title')}
        visible={modalVisible}
        footer={
          <Button onClick={() => setModalVisible(false)} type="primary" style={{ color: '#fff' }}>
            {_t('apply.funds.modal.enter.button')}
          </Button>
        }
        className={style.applyFundsModal}
      >
        <p>Test KTS sent to：</p>
        <p>{address}</p>
        <p>Transaction hash：</p>
        <p>{txhash}</p>
      </Modal>
    </div>
  );
};

export default connect(({ loading }) => {
  return { loading };
})(ApplyFunds);
