import { defineGkdApp } from '@gkd-kit/define';

// 抖音极速版
export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版[未安装]',
  groups: [
    {
      key: 0,
      name: '功能类-自动展开视频标题',
      desc: '点 展开',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '展开[0]',
          actionCdKey: 2500,
          matches: '@FrameLayout[visibleToUser=true] > [text="展开"]',
        },
      ],
    },
    {
      key: 1,
      name: '权限提示-通知权限',
      desc: '暂不开启',
      enable: true,
      quickFind: true,
      actionCdKey: 100,
      rules: [
        {
          key: 100,
          name: '暂不开启[100]',
          matches: '[text="及时获得动态提醒"] +(7-n) [text="暂不开启"]',
        },
        {
          key: 101,
          name: '暂不开启[101]',
          matches: '[text*="开启通知权限"] +(7-n) [text="暂不开启"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-评论氛围',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 200,
          name: '点 x[200]',
          matches: '[text*="评论氛围是否满意"] + [text="关闭,按钮"]',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-推荐弹窗',
      desc: '不感兴趣',
      enable: true,
      quickFind: true,
      actionCdKey: 300,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 300,
          name: '不感兴趣[300]',
          matches: '@FlattenUIText[text="不感兴趣"]',
        },
        {
          key: 301,
          name: '不感兴趣[301]',
          matches: '[text="不感兴趣"][visibleToUser=true][clickable=true]',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-评论提醒',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 500,
          name: '点 x[500]',
          matches: '@[desc="关闭"] - [text="及时获得评论回复提醒"]',
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-预约领金币',
      desc: '点 x',
      enable: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 600,
          name: '点 x[600]',
          matches: 'FlattenUIImage + UIView[clickable=true][text.length=0]',
        },
      ],
    },
    {
      key: 7,
      name: '全屏广告-恭喜获得金币',
      desc: '点 x',
      enable: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 700,
          name: '点 x[700]',
          matches: '[vid="at-"] >3 View[clickable=true][childCount=0]',
        },
      ],
    },
    {
      key: 8,
      name: '功能类-直播间金币奖励',
      desc: '自动开宝箱领金币',
      enable: true,
      activityIds: 'com.ss.android.ugc.aweme.live.LivePlayActivity',
      rules: [
        {
          key: 800,
          name: '开宝箱[800]',
          actionCd: 5000,
          matches: 'CustomUiImage +4 UIView + *',
        },
        {
          key: 801,
          name: '开宝箱[801]',
          actionCdKey: 800,
          matches: 'FlattenUIImage +4 @UIView + *',
        },
        {
          key: 810,
          name: '返回[810]',
          actionCd: 2000,
          quickFind: true,
          matches:
            '[text^="再等一下" || text*="后可开 再等一下" || text*="已获得 明天再来"][text.length>10]',
          action: 'back',
        },
        {
          key: 811,
          name: '返回[811]',
          actionCdKey: 810,
          matches: '[text*="幸运数字"] + * TextView[text="赠送"]',
          action: 'back',
        },
        {
          key: 812,
          name: '开宝箱[812]',
          actionCdKey: 810,
          matches:
            'View[childCount=4 || childCount=5] >2 TextView[text="开宝箱"]',
        },
        {
          key: 813,
          name: '返回[813]',
          actionCdKey: 810,
          matches: '[text="限时任务"] + * [text="去送礼"]',
          action: 'back',
        },
        {
          key: 825,
          name: '赠送额外获得[825]',
          preKeys: [812],
          quickFind: true,
          matches: '[text="赠送额外获得+" || text="收下金币"]',
        },
        {
          key: 850,
          name: 'x掉 换钻石送礼物[850]',
          preKeys: [825],
          quickFind: true,
          matches: '@ImageView + [text="换钻石送礼物"]',
        },
        {
          key: 851,
          name: '去Ta直播间[851]',
          preKeys: [812, 825],
          actionCdKey: 850,
          matches: '[text="去Ta直播间"] +n [text="去Ta直播间"]',
        },
        {
          key: 875,
          name: '返回[875]',
          preKeys: [850],
          matches: '[depth=0]',
          action: 'back',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-自动看广告领金币',
      desc: '自动看广告领金币',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 900,
          name: '领取成功[900]',
          actionCd: 3000,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: 'FlattenUIText[text="广告"] +(5-n) UIView[text^="领取成功"]',
        },
        {
          key: 925,
          name: '领取奖励/坚持退出[925]',
          preKeys: [900],
          matches:
            '@FlattenUIText[text="领取奖励"] +(3-n) FlattenUIText[text="坚持退出"]',
        },
        {
          key: 926,
          name: '收下金币[926]',
          actionCdKey: 925,
          preKeys: [900],
          activityIds: [],
          matches: 'FlattenUIText[text="评价并收下金币"]',
        },
      ],
    },
  ],
});
