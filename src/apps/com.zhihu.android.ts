import { defineGkdApp } from '@gkd-kit/define';

// 知乎
export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎[未安装]',
  groups: [
    {
      key: 0,
      name: '全屏广告-开启重要消息通知',
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
      enable: false,
      quickFind: true,
      actionDelay: 550,
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
  ],
});
