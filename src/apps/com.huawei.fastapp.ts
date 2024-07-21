import { defineGkdApp } from '@gkd-kit/define';

// 华为快应用
export default defineGkdApp({
  id: 'com.huawei.fastapp',
  name: '华为快应用[未安装]',
  groups: [
    {
      key: 0,
      name: '功能类-退出应用',
      desc: '点 返回键退出应用',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点 返回键[0]',
          action: 'back',
          matches: '[depth=0]',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-添加该游戏至桌面',
      desc: '点 退出',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 100,
          name: '点 退出[100]',
          matches:
            '@Button[text="退出"] < * < * - * [text="添加该游戏至桌面？"]',
        },
      ],
    },
  ],
});
