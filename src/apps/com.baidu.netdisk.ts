import { defineGkdApp } from '@gkd-kit/define';

// 百度网盘
export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘[未安装]',
  groups: [
    {
      key: 0,
      name: '局部广告-广告条',
      desc: '点 x',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches: '[vid="home_banner"] [vid="iv_close"]',
        },
        {
          key: 1,
          name: '点 x[1]',
          matches: '[vid="common_guide_bar_close"]',
        },
        {
          key: 2,
          name: '点 x[2]',
          matches: '[vid="close_ad"]',
        },
      ],
    },
  ],
});
