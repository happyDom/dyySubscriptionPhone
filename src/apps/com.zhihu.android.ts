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
          name: '点开新增关注',
          matches: '[text="新增关注"] - [vid="count_view"] - ImageView',
        },
        {
          key: 101,
          name: '点开收藏了我',
          matches: '[text="收藏了我"] - [vid="count_view"] - ImageView',
        },
        {
          key: 102,
          name: '点开赞同喜欢',
          matches: '[text="赞同喜欢"] - [vid="count_view"] - ImageView',
        },
        {
          key: 103,
          name: '点开评论转发',
          matches: '[text="评论转发"] - [vid="count_view"] - ImageView',
        },
      ],
    },
    {
      name: '分段广告-广告xxxx立即查看', // 广告・xxxx・立即查看
      key: 2,
      desc: '关闭->点第一个选项',
      enable: true,
      quickFind: true,
      activityIds: ['com.zhihu.android.app.ui.activity.MainActivity'],
      rules: [
        {
          key: 200,
          name: '点 x',
          matches:
            '[text^="广告"][text$="立即查看"][visibleToUser=true] < * + * > ImageView',
        },
        {
          key: 225,
          name: '点第一个选项',
          preKeys: [200],
          matches:
            '[vid="recycler_view"] > [index=0][visibleToUser=true] >3 [vid="tv_content"]',
        },
      ],
    },
    {
      name: '分段广告-xxx的广告', // xxxx 的广告
      key: 3,
      desc: '关闭->点第一个选项',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 300,
          name: '点 x[300]',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches: '[text=" 的广告"][visibleToUser=true] <<4 * +3 * ImageView',
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
          matches: '[text$="的广告"][visibleToUser=true] <3 * +4 * ImageView',
        },
        {
          key: 325,
          name: '',
          preKeys: [300, 301, 302],
          matches: '[text$="不感兴趣"][visibleToUser=true][vid="tv_content"]',
        },
      ],
    },
  ],
});
