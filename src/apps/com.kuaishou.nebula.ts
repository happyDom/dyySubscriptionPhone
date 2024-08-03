import { defineGkdApp } from '@gkd-kit/define';

// 快手极速版
export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版[未安装]',
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
      key: 2,
      name: '全屏广告-恭喜获得免费红包',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 200,
          name: '点 x[200]',
          matches: '@ImageView[clickable=true] -n [text="恭喜获得免费红包"]',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-推荐弹窗',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 300,
          name: '点 x[300]',
          matches: '[vid="title_view"][text*="推荐"] +n [vid="close_btn"]',
        },
      ],
    },
  ],
});
