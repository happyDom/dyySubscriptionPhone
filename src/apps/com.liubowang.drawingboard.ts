import { defineGkdApp } from '@gkd-kit/define';

// 画画板
export default defineGkdApp({
  id: 'com.liubowang.drawingboard',
  name: '画画板[未安装]',
  groups: [
    {
      key: 0,
      name: '局部广告-页脚广告',
      desc: '点 x',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches: '[vid="hiad_banner_ad"] [vid="hiad_banner_close_button"]',
        },
      ],
    },
  ],
});
