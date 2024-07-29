import { defineGkdApp } from '@gkd-kit/define';

// 数独
export default defineGkdApp({
  id: 'com.wedobest.shudu',
  name: '数独[未安装]',
  groups: [
    {
      key: 0,
      name: '局部广告-底部广告',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.wedobest.shudu.GameAct',
      actionCdKey: 0,
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches: '[vid="hiad_banner_close_button"]',
        },
        {
          key: 1,
          name: '点 x[1]',
          matches: '[text="广告"] +n Button',
        },
        {
          key: 2,
          name: '点 x[2]',
          activityIds: [],
          matches: '@Button < * +n [text="广告"]',
        },
      ],
    },
  ],
});
