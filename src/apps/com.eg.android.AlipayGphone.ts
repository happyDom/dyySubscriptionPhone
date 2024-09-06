import { defineGkdApp } from '@gkd-kit/define';

// 支付宝
export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝[未安装]',
  groups: [
    {
      key: 0,
      name: '全屏广告',
      desc: '点 x',
      enable: true,
      quickFind: true,
      actionCdKey: 0,
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: 'RelativeLayout[desc="全屏广告"] ImageView[desc="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/16537386',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-底部广告',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules: [
        {
          key: 100,
          name: '点 x[100]',
          quickFind: false,
          matches:
            'FrameLayout[desc="底部广告"][childCount=2] ImageView + ImageView[width<50 && height<50]',
          snapshotUrls: 'https://i.gkd.li/i/16901727',
        },
      ],
    },
    {
      key: 2,
      name: '权限提示-通知权限',
      desc: '点 x',
      enable: true,
      activityIds: 'com.eg.android.AlipayGphone.AlipayLogin',
      rules: [
        {
          key: 200,
          name: '点 x[200]',
          matches:
            '@FrameLayout[desc="关闭"] - * TextView[text^="开启通知权限"]',
          snapshotUrls: 'https://i.gkd.li/i/16747472',
        },
      ],
    },
  ],
});
