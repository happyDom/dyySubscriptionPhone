import { defineGkdApp } from '@gkd-kit/define';

// 丰巢
export default defineGkdApp({
  id: 'com.fcbox.hiveconsumer',
  name: '丰巢[未安装]',
  groups: [
    {
      key: 0,
      name: '功能类-一键开柜',
      desc: '自动一键开柜',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '继续取件[0]',
          matches: '[text="继续取件"]',
          snapshotUrls: 'https://i.gkd.li/i/16940683',
        },
        {
          key: 1,
          name: '返回首页[1]',
          actionCdKey: 0,
          matches: '[text="返回首页"]',
          snapshotUrls: 'https://i.gkd.li/i/16940715',
        },
        {
          key: 2,
          name: '一键开柜[2]',
          matches: ['[text="一键开柜"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/16940412',
            'https://i.gkd.li/i/16940427',
          ],
        },
        {
          key: 3,
          name: '不在丰巢柜旁',
          matches: '[text*="您好像不在柜机前"]',
          snapshotUrls: 'https://i.gkd.li/i/16940463',
        },
        {
          key: 4,
          name: '立即开门[4]',
          actionCdKey: 3,
          matches: ['[vid="tvOpen"]'],
          snapshotUrls: 'https://i.gkd.li/i/16940463',
        },
      ],
    },
  ],
});
