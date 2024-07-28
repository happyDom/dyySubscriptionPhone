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
      name: '功能类-朋友推荐/发现新朋友',
      desc: '点 x',
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
          key: 201,
          name: '点 x[201]',
          actionCdKey: 200,
          matches: '[text="朋友推荐"] + [vid="close_btn"]',
        },
        {
          key: 225,
          name: '减少此类推荐[225]',
          preKeys: [200],
          matches: '[text="减少此类推荐"][vid="reduce_card"]',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-限时消费券',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.kuaishou.merchant.pagedy.page.MerchantEraActivity',
      rules: [
        {
          key: 300,
          name: '点 x[300]',
          matches:
            '[text="限时消费券"] <n * + ViewGroup @ViewGroup[clickable=true] ImageView',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-我知道了',
      desc: '点 我知道了',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 400,
          name: '我知道了[400]',
          matches: 'Button[text="我知道了"]',
        },
      ],
    },
  ],
});
