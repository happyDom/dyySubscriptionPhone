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
          name: '点击不确定',
          matches: '[text="Chrome浏览器"][visibleToUser=true] + [desc="继续"]',
        },
      ],
    },
  ],
});
