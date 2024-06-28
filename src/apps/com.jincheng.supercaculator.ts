import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jincheng.supercaculatorx',
  name: '全能计算器[未安装]',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: 'x 掉',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      rules: [
        {
          key: 100,
          name: '广告-360借条',
          activityIds: ['com.jincheng.supercaculator.activity.SplashActivity'],
          matches:
            'TextView[text="立即申请"] <<2 FrameLayout - FrameLayout >2 ImageView[visibleToUser=true]',
        },
      ],
    },
  ],
});
