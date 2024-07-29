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
    {
      key: 5,
      name: '功能类-自动签到',
      desc: '立即签到 -> 立即签到 -> 返回',
      enable: true,
      activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
      rules: [
        {
          key: 500,
          name: '立即签到[500]',
          matches: 'Button[text="立即签到"]',
        },
        {
          key: 501,
          name: '立即签到[501]',
          actionCdKey: 500,
          matches: 'TextView[text="今日签到"]',
        },
        {
          key: 525,
          name: '立即签到[525]',
          preKeys: [500],
          matches: '[text="今日签到可领"] +n * Button[text="立即签到"]',
        },
        {
          key: 550,
          name: '返回[550]',
          preKeys: [525],
          matches: '[depth=0]',
          action: 'back',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-倒计时视频',
      desc: '领取奖励',
      enable: true,
      rules: [
        {
          key: 700,
          name: '领取奖励[700]',
          actionCd: 3000,
          activityIds: 'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
          matches: 'Button[text="领取奖励"]',
        },
        {
          key: 701,
          name: '领取奖励[701]',
          actionCdKey: 700,
          activityIds:
            'com.yxcorp.gifshow.ad.neo.video.award.AwardVideoPlayActivity',
          matches: 'TextView[text="已成功领取奖励"]',
        },
        {
          key: 725,
          name: '领取/继续[725]',
          preKeys: [700, 701],
          actionCd: 3000,
          matches: '[text="继续赚钱" || text="领取奖励"]',
        },
        {
          key: 726,
          name: '坚持退出[726]',
          preKeys: [701],
          actionCdKey: 725,
          matches: '[text="坚持退出" || text="放弃奖励"]',
        },
      ],
    },
    {
      key: 8,
      name: '全屏广告-带跳过按钮',
      desc: '点 跳过',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 800,
          name: '跳过[800]',
          matches: '[text="跳过"][clickable=true]',
        },
      ],
    },
  ],
});
