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
      name: '局部广告-物品推荐',
      desc: '点 不感兴趣',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 300,
          name: '不感兴趣[300]',
          actionDelay: 330,
          matches: '@FlattenUIText[text="不感兴趣"]',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-推荐关注按钮',
      desc: '点 不感兴趣',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 400,
          name: '不感兴趣[400]',
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
          matches: 'FlattenUIImage + UIView[clickable=true]',
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
          matches: 'CustomUiImage +4 UIView',
        },
        {
          key: 801,
          name: '开宝箱[801]',
          matches:
            'View[childCount=4] > @View[clickable=true] > TextView[text="开宝箱"]',
        },
        {
          key: 802,
          name: '返回[802]',
          actionCdKey: 801,
          quickFind: true,
          matches: 'View[text*="再等一下" || text*="明天再来"]',
          action: 'back',
        },
        {
          key: 825,
          name: '赠送额外获得[825]',
          preKeys: [801],
          matches:
            'View[clickable=true] >2 [text="赠送额外获得+" || text="收下金币"]',
        },
      ],
    },
  ],
});
