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
          name: '点击不确定',
          matches:
            '@[text="不确定"][visibleToUser=true] <<n * > TextView[text^="反馈："]',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-今日小确幸',
      desc: '点 x',
      enable: false,
      quickFind: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 0,
          name: '点击不确定',
          matches: 'Button[text=" "][visibleToUser=true] + ImageView',
        },
      ],
    },
  ],
});
