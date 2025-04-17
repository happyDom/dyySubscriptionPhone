import { defineGkdApp } from '@gkd-kit/define';

// 天天跳绳
export default defineGkdApp({
  id: 'com.gkid.crazyrope',
  name: '天天跳绳[未安装]',
  groups: [
    {
      key: 1,
      name: '全屏广告-开通会员',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.gkid.crazyrope.ui.member.MemberDiscountsActivity',
      rules: [
        {
          key: 100,
          name: '暂不需要[100]',
          matches: '[vid="btn_close"][text="暂不需要"]',
        },
        {
          key: 101,
          name: '点 x[101]',
          matches: '@[vid="interstitial_close"] <2 * [text="广告"]',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-2',
      desc: '点 x',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 200,
          name: '点 x[200]',
          activityIds: 'com.gkid.crazyrope.ui.drillcommon.DrillActivity',
          matches: '[text="免广告打扰"] < * + * [vid="iv_close"]',
        },
      ],
    },
    {
      key: 3,
      name: '分段广告-3',
      desc: '点 x',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 305,
          name: '点 x[305]',
          activityIds: 'com.gkid.crazyrope.ui.drillcommon.DrillActivity',
          matches: '[vid$="ad_container"] [vid="iv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/19790536',
        },
        {
          key: 310,
          name: '点 x[310]',
          preKeys: [305],
          activityIds: 'com.gkid.crazyrope.ui.drillcommon.DrillActivity',
          matches: '[vid$="ad_container"] [vid="tv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/19790570',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-4',
      enable: true,
      rules: [
        {
          key: 401,
          name: '为自己喝彩[401]',
          activityIds:
            'com.gkid.crazyrope.ui.detail.rope.RopeTaskPopupActivity',
          matches: '[text^="为自己喝彩"]',
        },
      ],
    },
  ],
});
