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
  ],
});
