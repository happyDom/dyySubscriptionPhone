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
          matches: 'CustomUiImage +4 UIView +2 [text="领金币"]',
        },
        {
          key: 801,
          name: '开宝箱[801]',
          actionCdKey: 800,
          matches: 'FlattenUIImage +4 @UIView +2 [text="领金币"]',
        },
        {
          key: 810,
          name: '返回[810]',
          actionCd: 2000,
          quickFind: true,
          matches:
            '[text$="明天再来" || text*="后可开 再等一下"][text.length>10]',
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
          matches: '@ImageView +n Button[text="换钻石并送出"]',
        },
        {
          key: 851,
          name: '去Ta直播间[851]',
          preKeys: [812, 825],
          actionCdKey: 850,
          matches: '[text="去Ta直播间"] +n [text="去Ta直播间"]',
        },
        {
          key: 852,
          name: '当前钻石不足，返回[852]',
          preKeys: [825],
          quickFind: true,
          matches: '[text="当前钻石不足"]',
          action: 'back',
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
      name: '功能类-倒计时广告',
      desc: '自动完成倒计时广告，领金币',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 910,
          name: '退出广告页面[910]',
          activityIds:
            'com.bytedance.android.sif.container.SifContainerActivity',
          matches: 'Button[vid="iv_back"][desc="返回"]',
        },
        {
          key: 920,
          name: '领取成功[920]',
          actionCd: 1500,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: 'UIView[text="领取成功，关闭，按钮"]',
        },
        {
          key: 921,
          name: '关闭[921]',
          actionCdKey: 920,
          activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
          matches: '@TextView[text="关闭"] < * +n [text="广告"]',
        },
        {
          key: 930,
          name: '领取奖励[930]',
          preKeys: [920, 921],
          matches: '@[text="领取奖励"] +n [text="坚持退出"]',
          action: 'clickCenter',
        },
        {
          key: 931,
          name: '收下金币[931]',
          actionCdKey: 930,
          preKeys: [920, 921],
          matches: 'FlattenUIText[text="评价并收下金币"]',
          action: 'back',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-逛街赚钱',
      desc: '自动逛街，领金币',
      enable: true,
      activityIds: 'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
      rules: [
        {
          key: 1010,
          name: '点 返回键[1010]',
          actionCd: 4700,
          matches: [
            '[text~="浏览\\\\d+秒可领\\\\d+金币"]',
            '[text="音量按钮"]',
          ],
        },
        {
          key: 1030,
          name: '点 返回键[1030]',
          matches:
            '[text~="恭喜获得\\\\d*金币" || text="评价并收下金币" || text$="可以再次领取奖励"]',
          action: 'back',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-自动读小说',
      desc: '自动读小说，领金币',
      enable: true,
      activityIds: [
        'com.ss.android.ugc.aweme.main.MainActivity',
        'com.ss.android.excitingvideo.ExcitingVideoActivity',
      ],
      rules: [
        {
          key: 1110,
          name: '阅读第一部小说[1110]',
          matches: [
            '[text="书架"] +2 [text="小说"] +2 [text="故事"]',
            '@FlattenUIText[text="1"] + FlattenUIText[text.length>0]',
          ],
        },
        {
          key: 1120,
          name: '左划开始阅读[1120]',
          preKeys: 1110,
          matches: 'TextView[text="左滑开始阅读"]',
          position: { right: '-width * 0.5', top: 0 },
        },
        {
          key: 1129,
          name: '继续阅读[1129]',
          actionCdKey: 1130,
          activityIds: [],
          matches: '[text="继续阅读下一页"]',
        },
        {
          key: 1130,
          name: '翻页[1130]',
          actionCd: 4700,
          activityIds: [],
          matches: '[childCount=4] > ProgressBar + [text~="\\\\d+金币"]',
          position: { left: 0, bottom: '-height' },
        },
        {
          key: 1140,
          name: '返回[1140]',
          matches: '[text^="恭喜获得"][text$="阅读奖励"]',
          action: 'back',
        },
        {
          key: 1150,
          name: '点击金币条[1150]',
          matches: '[childCount=5] > ProgressBar + [text~="\\\\d+金币"]',
        },
        {
          key: 1160,
          name: '领取金币[1160]',
          matches: '[text="阅读赚金币"] +n [text="去领取"]',
        },
        {
          key: 1170,
          name: '看视频[1170]',
          preKeys: 1160,
          matches: '[text~="看视频再领 \\\\d+ 金币"]',
        },
        {
          key: 1180,
          name: '看小说[1180]',
          matches: '[text="阅读赚金币"] +n [text="看小说"]',
        },
      ],
    },
  ],
});
