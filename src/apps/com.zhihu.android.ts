import { defineGkdApp } from '@gkd-kit/define';

// 知乎
export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎[未安装]',
  groups: [
    {
      key: 0,
      name: '全屏广告-重要消息通知',
      desc: 'x 掉',
      enable: true,
      quickFind: true,
      activityIds: 'com.zhihu.android.app.ui.activity.HostActivity',
      rules: [
        {
          key: 0,
          name: 'x 掉消息弹窗',
          matches: '@[vid="btn_close"] +n [text="开启重要消息通知"]',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-自动查看新消息',
      desc: '关注->收藏->赞同->评论',
      enable: true,
      quickFind: true,
      actionDelay: 450,
      actionCdKey: 100,
      activityIds: 'com.zhihu.android.app.ui.activity.HostActivity',
      rules: [
        {
          key: 100,
          name: '新增关注',
          matches: '[text="新增关注"] - [vid="count_view"] - ImageView',
        },
        {
          key: 101,
          name: '收藏了我',
          matches: '[text="收藏了我"] - [vid="count_view"] - ImageView',
        },
        {
          key: 102,
          name: '赞同喜欢',
          matches: '[text="赞同喜欢"] - [vid="count_view"] - ImageView',
        },
        {
          key: 103,
          name: '评论转发',
          matches: '[text="评论转发"] - [vid="count_view"] - ImageView',
        },
      ],
    },
    {
      name: '分段广告-广告・xxxx・立即查看/热度xxx',
      key: 2,
      desc: '关闭->点第一个选项',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 200,
          name: '点 x[200]',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[text^="广告 · "][visibleToUser=true] < * + * > ImageView',
        },
        {
          key: 225,
          name: '点第一个选项[225]',
          preKeys: [200],
          actionCdKey: 226,
          matches:
            '[vid="recycler_view"] > [index=0][visibleToUser=true] >3 [vid="tv_content"]',
        },
        {
          key: 226,
          name: '不感兴趣[226]',
          preKeys: [200],
          matches:
            'FrameLayout[depth=0] >(-n+10) TextView[text="不感兴趣"][visibleToUser=true]',
        },
      ],
    },
    {
      name: '分段广告-xxx 的广告', // xxxx 的广告
      key: 3,
      desc: '关闭->点第一个选项',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 300,
          name: '点 x[300]',
          actionCd: 2000,
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[text=" 的广告"][visibleToUser=true] <<4 * +3 * >2 ImageView[visibleToUser=true]',
        },
        {
          key: 301,
          name: '点 x[301]',
          actionCdKey: 300,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '[text$="的广告"][visibleToUser=true] <2 * +2 ImageView[clickable=true]',
        },
        {
          key: 302,
          name: '点 x[302]',
          actionCdKey: 300,
          activityIds: 'com.zhihu.android.ContentActivity',
          matches:
            '[text$="的广告"][visibleToUser=true] <3 * +4 * ImageView[visibleToUser=true]',
        },
        {
          key: 303,
          name: '点 x[303]',
          actionCdKey: 300,
          activityIds:
            'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
          matches: '@Image[clickable=true] + TextView[text$="的广告"]',
        },
        {
          key: 325,
          name: '不感兴趣[325]',
          preKeys: [300, 301, 302],
          matches: '[text$="不感兴趣"][visibleToUser=true][vid="tv_content"]',
        },
      ],
    },
    {
      name: '分段广告-xxxx・商品介绍',
      key: 4,
      desc: '关闭->点第一个选项',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 400,
          name: '点 x[400]',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[text="· 商品介绍"][visibleToUser=true] <2 * + * > ImageView',
        },
        {
          key: 425,
          name: '点第一个选项[425]',
          preKeys: [400],
          matches:
            '[vid="recycler_view"] > [index=0][visibleToUser=true] >3 [vid="tv_content"]',
        },
      ],
    },
    {
      name: '分段广告-xxxx・咨询服务',
      key: 5,
      desc: '关闭->点第一个选项',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 500,
          name: '点 x[500]',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[text="· 咨询服务"][visibleToUser=true] <2 * + * > ImageView',
        },
        {
          key: 525,
          name: '点第一个选项[525]',
          preKeys: [500],
          matches:
            '[vid="recycler_view"] > [index=0][visibleToUser=true] >3 [vid="tv_content"]',
        },
      ],
    },
    {
      name: '局部广告-xxxx 的广告',
      key: 6,
      desc: '点 x',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 600,
          name: '点 x[600]',
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '[text$=" 的广告"][visibleToUser=true] +3 @ImageView - * >3 [text="立即下载"]',
        },
        {
          key: 601,
          name: '点 x[601]',
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '[text$=" 的广告"][visibleToUser=true] +(2,3) ImageView[clickable=true]',
        },
        {
          key: 602,
          name: '点 x[602]',
          activityIds: 'com.zhihu.android.ContentActivity',
          matches:
            '[text="的广告"] <3 * +(5-n) ViewGroup > @ImageView[clickable=true][visibleToUser=true] - * [text="立即下载"]',
        },
        {
          key: 603,
          name: '点 x[603]',
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '[text$=" 的广告"] < * - ImageView[clickable=true][visibleToUser=true]',
        },
        {
          key: 625,
          name: '不感兴趣[625]',
          activityIds: 'com.zhihu.android.ContentActivity',
          matches: '[text$="不感兴趣"][visibleToUser=true]',
        },
      ],
    },
    {
      name: '更新提示-版本内测',
      key: 7,
      desc: '不再提醒 -> 取消',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 700,
          name: '勾选不再提醒[700]',
          matches:
            '[text*="版本内测"] <<(-n+5) FrameLayout + * >3 [text="不再提醒"]',
        },
        {
          key: 725,
          name: '取消[725]',
          preKeys: 700,
          matches: 'Button[text="取消"]',
        },
      ],
    },
    {
      name: '功能类-自动播放GIF',
      key: 8,
      desc: '点GIF图标',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 800,
          name: '点GIF图标[800]',
          action: 'clickNode',
          matches:
            '@ImageView[vid="image_normal"][clickable=true] + * > [vid="text_gif"][text="GIF"][visibleToUser=true]',
        },
      ],
    },
    {
      name: '功能类-查看原图',
      key: 9,
      desc: '点 查看原图',
      enable: true,
      quickFind: true,
      activityIds: 'com.zhihu.android.picture.activity.ImagesViewerActivity',
      rules: [
        {
          key: 900,
          name: '查看原图[900]',
          matches: '[text="查看原图"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      name: '功能类-感谢您的创作',
      key: 10,
      desc: '点 完成',
      enable: true,
      quickFind: true,
      activityIds: 'com.zhihu.android.panel.ng.ui.PublishFeedBackActivity',
      rules: [
        {
          key: 1000,
          name: '完成[1000]',
          matches:
            '@TextView[text="完成"] + * >3 [text^="感谢你的第"][text$="篇创作！"]',
        },
      ],
    },
    {
      name: '局部广告-无广告字样卡片',
      key: 11,
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds:
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
      rules: [
        {
          key: 1100,
          name: '点 x[1100]',
          matches:
            'FrameLayout ViewGroup[childCount=4] ImageView + TextView[text.length>1] + TextView[text=null] + ImageView[clickable=true]',
        },
      ],
    },
    {
      name: '功能类-评论氛围',
      key: 12,
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 1200,
          name: '点 x[1200]',
          matches:
            '@UIImage[text="关闭,按钮"] +n [text*="评论氛围"][text*="是否满意？"]',
        },
      ],
    },
    {
      name: '局部广告-顶部广告卡片',
      key: 13,
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        {
          key: 1300,
          name: '点 x[1300]',
          matches: '[vid="ad_container"] ImageView[vid="img_close_focus"]',
        },
      ],
    },
    {
      name: '局部广告-关注小弹窗',
      key: 14,
      desc: '点 x',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 1410,
          name: '点 x[1410]',
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '@[vid="close_img"] +n [vid="sub_title_tv"][text^="看了这么久，点个关注"]',
        },
      ],
    },
  ],
});
