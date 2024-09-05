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
      activityIds: [
        'com.xingin.matrix.detail.activity.DetailFeedActivity',
        'com.xingin.xhs.index.v2.IndexActivityV2',
      ],
      rules: [
        {
          key: 0,
          name: '暂不开启[0]',
          matches: '[text="开启个性化通知"] +n * Button[text="暂不开启"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16634178',
            'https://i.gkd.li/i/16736608',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '功能类-推荐关注',
      desc: '点返回键',
      enable: true,
      quickFind: true,
      activityIds: 'com.xingin.alpha.audience.v2.AlphaAudienceActivityV2',
      rules: [
        {
          key: 105,
          name: '点 返回键[105]',
          matches: '[text="看我这么久，关注一下？"] +(5-n) [text="立即关注"]',
          action: 'back',
          snapshotUrls: 'https://i.gkd.li/i/16705300',
        },
      ],
    },
  ],
});
