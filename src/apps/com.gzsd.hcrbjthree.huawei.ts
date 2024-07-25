import { defineGkdApp } from '@gkd-kit/define';

// 火柴人暴击3
export default defineGkdApp({
  id: 'com.gzsd.hcrbjthree.huawei',
  name: '火柴人暴击3[未安装]',
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
          activityIds: 'com.android.boot.MainActivity',
          matches:
            '@ImageView[vid="close1"] +n TextView[vid="ad_flag"][text="广告"]',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-顶部广告卡片',
      desc: '点 x',
      enable: true,
      quickFind: true,
      actionCdKey: 100,
      activityIds: 'com.android.boot.MainActivity',
      rules: [
        {
          key: 100,
          name: '点 x[100]',
          matches:
            '@ImageView[vid="close1"] +2 * TextView[vid="ad_flag"][text="广告"]',
        },
        {
          key: 101,
          name: '点 x[101]',
          matches:
            '@ImageView[vid="hiad_banner_close_button"] - * TextView[vid="hiad_ad_label"][text="广告"]',
        },
      ],
    },
  ],
});
