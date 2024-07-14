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
      desc: '依次点击 新增关注->评论转发',
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
          matches:
            '[vid="recycler_view"] > [index=0][visibleToUser=true] >3 [vid="tv_content"]',
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
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            '[text=" 的广告"][visibleToUser=true] <<4 * +3 * ImageView[visibleToUser=true]',
        },
        {
          key: 301,
          name: '点 x[301]',
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '[text$="的广告"][visibleToUser=true] <2 * +2 ImageView[clickable=true]',
        },
        {
          key: 302,
          name: '点 x[302]',
          activityIds: 'com.zhihu.android.ContentActivity',
          matches:
            '[text$="的广告"][visibleToUser=true] <3 * +4 * ImageView[visibleToUser=true]',
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
      desc: '关闭',
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
          activityIds: 'com.huawei.android.launcher.unihome.UniHomeLauncher',
          matches: '[text$=" 的广告"][visibleToUser=true] +2 @ImageView',
        },
      ],
    },
  ],
});
