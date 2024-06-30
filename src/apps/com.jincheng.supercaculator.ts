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
          key: 99,
          name: '开屏广告-360借条-带有广告标识字',
          actionDelay: 450,
          matches: '[text="广告"] <<4 View +2 View > Image',
        },
        {
          key: 100,
          name: '开屏广告-360借条-FrameLayout嵌套Image',
          matches:
            'TextView[text="立即申请"] <<2 FrameLayout -(-1n+5) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 101,
          name: '开屏广告-360借条-FrameLayout嵌套Image',
          matches:
            'TextView[text="查看详情"] <<2 FrameLayout -(-1n+5) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 102,
          name: '开屏广告-360借条-FrameLayout嵌套Image',
          matches:
            'TextView[text*="了解更多"] <<(2,3) FrameLayout -(2,3) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 103,
          name: '开屏广告-360借条-FrameLayout嵌套Image',
          matches:
            'TextView[text="进入小程序"] <<2 FrameLayout -(-1n+5) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 200,
          name: '开屏广告-360借条',
          matches:
            'TextView[text="立即申请"] <<2 FrameLayout -3 FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 201,
          name: '开屏广告-360借条',
          matches:
            'TextView[text="查看详情"] <<2 FrameLayout -3 FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 202,
          name: '开屏广告-360借条',
          matches:
            'TextView[text*="了解更多"] <<(2,3) FrameLayout -(2,3) FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 203,
          name: '开屏广告-360借条',
          matches:
            'TextView[text="进入小程序"] <<2 FrameLayout -3 FrameLayout > ImageView[visibleToUser=true]',
        },
      ],
    },
  ],
});
