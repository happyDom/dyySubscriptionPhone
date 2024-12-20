import { defineGkdApp } from '@gkd-kit/define';

// 快手极速版
export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版[未安装]',
  groups: [
    {
      key: 0,
      name: '局部广告-反馈调查',
      desc: '点 不确定 或 x',
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
        {
          key: 1,
          name: '点 x[1]',
          activityIds: 'com.yxcorp.gifshow.detail.PhotoDetailActivity',
          matches:
            '@ImageView[vid="survey_close"] - [text="反馈：您对此条视频满意吗？"]',
          snapshotUrls: 'https://i.gkd.li/i/16625913',
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
    {
      key: 4,
      name: '功能类-退出直播间',
      desc: '直接退出',
      enable: true,
      quickFind: true,
      activityIds: 'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
      rules: [
        {
          key: 400,
          name: '退出[400]',
          matches: '@[text="关注并退出"] < * + * [text="退出直播间"]',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-发现新朋友',
      desc: '点返回键',
      enable: true,
      quickFind: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 500,
          name: '返回键[500]',
          matches: 'TextView[vid="title_tip"][text="发现新朋友"]',
          snapshotUrls: 'https://i.gkd.li/i/16871001',
          action: 'back',
        },
      ],
    },
  ],
});
