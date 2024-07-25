import { defineGkdApp } from '@gkd-kit/define';

// 宝宝巴士科学
export default defineGkdApp({
  id: 'com.ailiyong.world.course',
  name: '宝宝巴士科学[未安装]',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '跳过 广告',
      enable: true,
      quickFind: true,
      matchTime: 1000,
      actionMaximum: 2,
      actionCdKey: 0,
      actionMaximumKey: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '跳过[0]',
          activityIds: 'com.babybus.plugin.startupview.ui.StartUpActivity',
          matches: '[vid$="ad_frame"] [vid="tv_timer"][text$="跳过"]',
        },
      ],
    },
  ],
});
