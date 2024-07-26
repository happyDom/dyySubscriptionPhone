import { defineGkdApp } from '@gkd-kit/define';

// 华为音乐
export default defineGkdApp({
  id: 'com.android.mediacenter',
  name: '华为音乐[未安装]',
  groups: [
    {
      key: 0,
      name: '全屏广告',
      desc: '点 x',
      enable: true,
      quickFind: true,
      actionCdKey: 0,
      activityIds: 'com.android.mediacenter.MainActivity',
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches: '[vid="campaign_dialog_close_image_view"]',
        },
        {
          key: 1,
          name: '点 x[1]',
          matches: '[vid="iv_close"]',
        },
      ],
    },
  ],
});
