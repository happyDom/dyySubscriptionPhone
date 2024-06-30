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
      actionMaximum: 1,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      quickFind: true,
      actionDelay: 300,
      activityIds: [
        'com.jincheng.supercaculator.activity.SplashActivity',
        'com.qq.e.ads.ADActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 0,
          name: '开屏广告-360借条-带有广告标识字',
          actionDelay: 450,
          matches: '[text="广告"] <<4 View +2 View > Image',
        },
        {
          key: 1,
          name: '开屏广告-360借条-1',
          matches:
            'TextView[text="立即申请"] <<2 FrameLayout -(-1n+5) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 2,
          name: '开屏广告-360借条-2',
          matches:
            'TextView[text="查看详情"] <<2 FrameLayout -(-1n+5) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 3,
          name: '开屏广告-360借条-3',
          matches:
            'TextView[text*="了解更多"] <<(2,3) FrameLayout -(2,3) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 4,
          name: '开屏广告-360借条-4',
          matches:
            'TextView[text="进入小程序"] <<2 FrameLayout -(-1n+5) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 5,
          name: '开屏广告-360借条-5',
          matches:
            'TextView[text="立即申请"] <<2 FrameLayout -3 FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 6,
          name: '开屏广告-360借条-6',
          matches:
            'TextView[text="查看详情"] <<2 FrameLayout -3 FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 7,
          name: '开屏广告-360借条-7',
          matches:
            'TextView[text*="了解更多"] <<(2,3) FrameLayout -(2,3) FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 8,
          name: '开屏广告-360借条-8',
          matches:
            'TextView[text="进入小程序"] <<2 FrameLayout -3 FrameLayout > ImageView[visibleToUser=true]',
        },
      ],
    },
  ],
});
