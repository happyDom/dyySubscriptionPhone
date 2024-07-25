import { defineGkdApp } from '@gkd-kit/define';

// 腾讯视频
export default defineGkdApp({
  id: 'com.tencent.qqlive',
  name: '腾讯视频[未安装]',
  groups: [
    {
      key: 0,
      name: '功能类-待定义',
      desc: '点 x',
      enable: false,
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点 返回键[0]',
          actionCd: 250,
          matches: '[depth=0]',
          action: 'back',
        },
      ],
    },
  ],
});
