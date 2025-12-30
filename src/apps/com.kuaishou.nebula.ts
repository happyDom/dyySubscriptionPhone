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
    {
      key: 6,
      name: '功能类-自动举报',
      enable: true,
      rules: [
        {
          key: 609,
          name: '描述与实际不符[609]',
          actionCd: 1000,
          activityIds: 'com.kuaishou.live.webview.LiveWebViewActivity',
          matches: '[text="描述与实际不符"]',
        },
        {
          key: 610,
          name: '虚假夸大[610]',
          actionCdKey: 609,
          activityIds: 'com.yxcorp.gifshow.ad.webview.AdYodaActivity',
          matches: '@View[clickable=true] > [text*="虚假夸大"]',
        },
        {
          key: 611,
          name: '低俗擦边[611]',
          actionCdKey: 609,
          activityIds: 'com.kwai.component.misc.report.ReportYodaActivity',
          matches: '[text="低俗擦边"]',
        },
        {
          key: 620,
          name: '实际不符[620]',
          preKeys: [610],
          matches: 'View[clickable=true] >2 [text="商品宣传与实际不符"]',
        },
        {
          key: 621,
          name: '虚假低价[621]',
          preKeys: [611],
          matches: '[text="虚假低价"]',
        },
        {
          key: 630,
          name: '提交[630]',
          preKeys: [609, 620, 621],
          actionDelay: 150,
          quickFind: true,
          matches: 'Button[clickable=true][text="提交"]',
        },
        {
          key: 640,
          name: '完成[640]',
          preKeys: [630],
          matches: '[clickable=true][text="完成"]',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-倒计时广告',
      desc: '关闭或者跳过',
      enable: true,
      rules: [
        {
          key: 705,
          name: '已成功领取奖励[705]',
          matches: '[text="已成功领取奖励"]',
          snapshotUrls: 'https://i.gkd.li/i/18723441',
        },
        {
          key: 710,
          name: 'x[710]',
          preKeys: [705],
          matches: '@[vid="close_icon"] < * [text$="s"]',
          snapshotUrls: 'https://i.gkd.li/i/18723482',
        },
        {
          key: 715,
          name: '坚持退出[715]',
          preKeys: [705],
          matches: '[text="坚持退出"]',
          snapshotUrls: 'https://i.gkd.li/i/20138624',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-悬浮按钮',
      desc: '关闭',
      enable: true,
      rules: [
        {
          key: 805,
          name: '点x[805]',
          matches: '@ImageView < ViewGroup + * TextView[text="免广告"]',
          snapshotUrls: 'https://i.gkd.li/i/18723499',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-不感兴趣',
      desc: '该主播，该类型',
      enable: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 905,
          name: '去选择[905]',
          matches: '[text^="反馈成功"] + [text="去选择"]',
        },
        {
          key: 910,
          name: '该主播[910]',
          preKeys: [905],
          matches: '[text="该主播"]',
        },
        {
          key: 911,
          name: '该类型[911]',
          preKeys: [905],
          matches: '[text="该类型"]',
        },
        {
          key: 920,
          name: '提交[9920]',
          preKeys: [910, 911],
          matches: '[text="提交"]',
        },
      ],
    },
  ],
});
