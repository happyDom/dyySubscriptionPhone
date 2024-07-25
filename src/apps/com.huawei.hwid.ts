import { defineGkdApp } from '@gkd-kit/define';

// HMS Core
export default defineGkdApp({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
  groups: [
    {
      key: 0,
      name: '全屏广告-app倒计时',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds:
        'com.huawei.openalliance.ad.ppskit.activity.InterstitialAdActivity',
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches: '[text="广告"] < * < * -n [text~="\\\\d+秒"] + ImageView',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-xx秒后领取奖励',
      desc: '点 x',
      enable: true,
      activityIds:
        'com.huawei.openalliance.ad.ppskit.activity.PPSRewardActivity',
      rules: [
        {
          key: 100,
          name: '点 x[100]',
          matches: '[text~=".*\\\\d+ 秒后领取奖励"] + * ImageView',
        },
        {
          key: 125,
          name: '关闭广告[125]',
          quickFind: true,
          preKeys: [100],
          matches: '@Button[text="关闭广告"] + Button[text="继续观看"]',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-打开应用广告',
      desc: '点 x',
      enable: true,
      actionCdKey: 200,
      rules: [
        {
          key: 200,
          name: '点 x[200]',
          activityIds:
            'com.huawei.openalliance.ad.ppskit.activity.InterstitialAdActivity',
          matches: '@ImageView[vid="interstitial_close"]',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-安装应用广告',
      desc: '点 x',
      enable: true,
      actionCdKey: 300,
      rules: [
        {
          key: 300,
          name: '点 x[300]',
          activityIds:
            'com.huawei.openalliance.ad.ppskit.activity.LandingDetailsActivity',
          matches: 'ImageView[vid="landing_close_image_view"]',
        },
        {
          key: 301,
          name: '点 x[301]',
          activityIds:
            'com.huawei.openalliance.ad.ppskit.activity.InnerPPSActivity',
          matches: 'ImageView[desc="取消"]',
        },
      ],
    },
  ],
});
