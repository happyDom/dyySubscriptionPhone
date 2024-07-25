import { defineGkdApp } from '@gkd-kit/define';

// 华为智慧助手
export default defineGkdApp({
  id: 'com.huawei.intelligent',
  name: '华为智慧助手',
  groups: [
    {
      key: 0,
      name: '功能类-禁用提示',
      desc: '点 知道了',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '知道了[0]',
          matches: '[text*="已限制使用“智慧助手"] + TextView[text="知道了"]',
        },
      ],
    },
  ],
});
