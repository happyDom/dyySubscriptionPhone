import { defineGkdApp } from '@gkd-kit/define';

// 我的汤姆猫2
export default defineGkdApp({
  id: 'com.outfit7.mytalkingtom2.huawei',
  name: '我的汤姆猫2[未安装]',
  groups: [
    {
      key: 0,
      name: '局部广告-顶部广告卡片',
      desc: '点 x',
      enable: true,
      quickFind: true,
      actionCdKey: 0,
      activityIds: 'com.outfit7.felis.MainActivity',
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches: '[vid="hiad_banner_close_button"]',
        },
      ],
    },
  ],
});
