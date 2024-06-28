import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jincheng.supercaculator',
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
          name: '广告-360借条-FrameLayout嵌套Image',
          activityIds: ['com.jincheng.supercaculator.activity.SplashActivity'],
          matches:
            'TextView[text="立即申请" || text="查看详情"] <<2 FrameLayout -(-1n+5) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 101,
          name: '广告-360借条',
          activityIds: ['com.jincheng.supercaculator.activity.SplashActivity'],
          matches:
            'TextView[text="立即申请"||text="查看详情"] <<2 FrameLayout -(-n+5) FrameLayout > ImageView[visibleToUser=true]',
        },
      ],
    },
  ],
});
