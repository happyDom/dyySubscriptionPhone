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
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          quickFind: true,
          activityIds:
            'com.huawei.openalliance.ad.ppskit.activity.InterstitialAdActivity',
          matches: '[text="广告"] < * < * -n [text~="\\\\d+秒"] + ImageView',
        },
        {
          key: 1,
          name: '点 x[1]',
          actionCdKey: 0,
          activityIds:
            'com.huawei.openalliance.ad.ppskit.activity.PPSRewardActivity',
          matches: '[text~=".*\\\\d+ 秒后领取奖励"] + * ImageView',
        },
        {
          key: 25,
          name: '关闭广告[25]',
          quickFind: true,
          preKeys: [1],
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
    {
      key: 4,
      name: '通知提示-是否允许xxx发送通知',
      desc: '禁止',
      enable: true,
      rules: [
        {
          key: 400,
          name: '禁止[400]',
          matches:
            '[text~="是否允许“.*”发送通知？"] < * < * < * Button[text="禁止"]',
        },
      ],
    },
  ],
});
