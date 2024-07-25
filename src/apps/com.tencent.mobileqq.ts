import { defineGkdApp } from '@gkd-kit/define';

// QQ
export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: '腾讯QQ[未安装]',
  groups: [
    {
      key: 0,
      name: '全屏广告-开启消息推送',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.tencent.mobileqq.activity.DialogActivity',
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches: '@ImageView[desc="已关闭"] - * [text="开启消息推送"]',
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-广告卡片',
      desc: '点 广告->关闭此条广告',
      enable: true,
      quickFind: true,
      activityIds: 'cooperation.qwallet.plugin.QWalletToolFragmentActivity',
      rules: [
        {
          key: 100,
          name: '点 广告[100]',
          matches: '[text="广告"][clickable=true]',
        },
        {
          key: 125,
          name: '关闭此条广告[125]',
          preKeys: [100],
          matches: '@LinearLayout[clickable=true] >2 [text="关闭此条广告"]',
        },
      ],
    },
  ],
});
