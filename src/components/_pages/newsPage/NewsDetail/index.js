import React from 'react';
import styles from './style.less';
import newsImg from 'assets/news/news.jpg';
import Arrow from 'components/Arrow';
import { _t } from 'utils/lang';

export default props => {
  const _setDetailShowCallback = props._setDetailShowCallback;
  return (
    <div className={styles['detail']}>
      <div
        onClick={() => {
          _setDetailShowCallback(false);
        }}
        className={styles['detail-return']}
      >
        <Arrow left={true} />
        <span>{_t('news.return')}</span>
      </div>
      <div className={styles['detail-title']}>库币新起航，惊喜福利月</div>
      <div className={styles['detail-dateType']}>2020.3.26 23:11:49 周报</div>
      <div className={styles['detail-imgBox']}>
        <img src={newsImg} alt="" />
      </div>
      <div className={styles['detail-content']}>
        由库币孵化的新一代POS矿池Pool-X今天宣布，将于2020年2月28日起至3月10日开启POL
        LockDrop锁仓激励超级轮。
        本次活动共分四个专场，分别为BTC专场、ETH专场、KCS专场和TRX专场。用户可在库币平台充值到指定地址并锁定BTC、ETH、KCS或TRX，根据其锁仓量，用户将获得相应的POL份额。本次超级轮的POL份额将从白皮书提及的预算系统中提取8%，共计8000万个POL。
        在POL/USDT交易对上线前，成功参与LockDrop超级轮的用户，将直接解锁获取POL份额的20%，并可直接用于后期POL/USDT交易对的现货交易。剩余80%的份额用户需参与矿池Staking的方式来解锁，并可通过邀请新用户、净买入POL来加速解锁份额。
        “Pool-X本次的Lock
        Drop超级轮活动将进一步释放POL的流动性，为POL/USDT交易对的上线打好基础。”库币联合创始人Johnny
        Lyu表示，“LockDrop超级轮活动是PooL-X与用户的双赢。用户通过参与锁仓活动获得Pool-X送出的POL，直接获得收益；PooL-X则进一步提升了平台知名度和代币的流动性，提高POS矿池的繁荣度。”
        Pool-X于2019年8月正式推出，是库币团队孵化且独立运营的PoS矿池平台。Pool-X旨在提供集合多币种&单币种多节点的质押服务，甄选优质矿池及节点的快速通道并提供流动性交易市场、节点接入及运营解决方案等服务。
        POL (Proof Of Liquidity)
        是由Pool-X矿池基于波场TRC20协议发行的无任何团队或个人预留的去中心化积分，总量为10亿。POL是为记录流动性的权益证明，在权益证明置换过程中充当着置换成本的支付手段的作用，同时也是Pool-X矿池平台中各类数字资产流动性的定价资产和权益凭证的记录载体。
      </div>
    </div>
  );
};
