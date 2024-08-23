import { defineGkdApp } from '@gkd-kit/define';

// 小红书
export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书[未安装]',
  groups: [
    {
      key: 0,
      name: '权限提示-个性化通知',
      desc: '暂不开启',
      enable: true,
      quickFind: true,
      activityIds: 'com.xingin.matrix.detail.activity.DetailFeedActivity',
      rules: [
        {
          key: 0,
          name: '暂不开启[0]',
          matches: '[text="开启个性化通知"] +n * Button[text="暂不开启"]',
          snapshotUrls: 'https://i.gkd.li/i/16634178',
        },
      ],
    },
  ],
});
