import { defineGkdApp } from '@gkd-kit/define';

// 快手
export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手[未安装]',
  groups: [
    {
      key: 0,
      name: '局部广告-反馈调查',
      desc: '点 不确定',
      enable: true,
      quickFind: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 0,
          name: '不确定[0]',
          matches:
            '@[text="不确定"][visibleToUser=true] <<n * > TextView[text^="反馈："]',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-今日小确幸',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 100,
          name: '点 x[100]',
          matches: 'Button[text=" "][visibleToUser=true] + ImageView',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-发现新朋友',
      desc: '点 x, 然后减少推荐',
      enable: true,
      quickFind: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 200,
          name: '点 x[200]',
          matches:
            '[text="发现新朋友"] + * >2 LinearLayout[index=0] [vid="close_btn"]',
        },
        {
          key: 225,
          name: '减少此类推荐[225]',
          preKeys: [200],
          matches: '[text="减少此类推荐"][vid="reduce_card"]',
        },
      ],
    },
  ],
});
