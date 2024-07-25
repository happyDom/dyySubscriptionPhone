import { defineGkdApp } from '@gkd-kit/define';

// 宝宝巴士
export default defineGkdApp({
  id: 'com.sinyee.babybus.recommendapp',
  name: '宝宝巴士[未安装]',
  groups: [
    {
      key: 0,
      name: '局部广告-顶部广告卡片',
      desc: '点 x',
      enable: true,
      quickFind: true,
      actionCdKey: 0,
      activityIds:
        'com.sinyee.babybus.android.mainvideo.newvideoplay.VideoPlayActivity',
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches: '@ImageView[vid="closeIv"] - * [vid="ad_banner_bg"]',
        },
        {
          key: 1,
          name: '点 x[1]',
          matches: '@ImageView[vid="closeIv"] - [vid="adContentRl"]',
        },
      ],
    },
  ],
});
