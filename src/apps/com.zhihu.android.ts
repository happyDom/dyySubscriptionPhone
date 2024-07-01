import { defineGkdApp } from '@gkd-kit/define';

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
  ],
});
