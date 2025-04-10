import { defineGkdApp } from '@gkd-kit/define';

// 天天跳绳
export default defineGkdApp({
  id: 'com.gkid.crazyrope',
  name: '天天跳绳[未安装]',
  groups: [
    {
      key: 1,
      name: '全屏广告-开通会员',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.gkid.crazyrope.ui.member.MemberDiscountsActivity',
      rules: [
        {
          key: 100,
          name: '暂不需要[100]',
          matches: '[vid="btn_close"][text="暂不需要"]',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-2',
      desc: '点 x',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 200,
          name: '点 x[200]',
          activityIds: 'com.gkid.crazyrope.ui.drillcommon.DrillActivity',
          matches: '[text="免广告打扰"] < * + * [vid="iv_close"]',
        },
      ],
    },
  ],
});
