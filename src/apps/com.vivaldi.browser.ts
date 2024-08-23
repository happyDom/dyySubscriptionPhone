import { defineGkdApp } from '@gkd-kit/define';

// vivaldi 浏览器
export default defineGkdApp({
  id: 'com.vivaldi.browser',
  name: 'vivaldi浏览器[未安装]',
  groups: [
    {
      key: 0,
      name: '功能类-继续浏览',
      desc: '点 继续',
      enable: true,
      quickFind: true,
      activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
      rules: [
        {
          key: 0,
          name: '继续[0]',
          matches: '[text="继续搜索"] +n [text="浏览器"] + [text="继续"]',
          snapshotUrls: 'https://i.gkd.li/i/16646820',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-APP内浏览提示',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'org.chromium.chrome.browser.ChromeTabbedActivity',
      rules: [
        {
          key: 100,
          name: '点 x[100]',
          matches:
            '[id="app-download-btn"] - [id="app-download-close-btn"] > [text="app-close-btn"]',
        },
      ],
    },
  ],
});
