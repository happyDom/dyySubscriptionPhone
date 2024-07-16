import { defineGkdApp } from '@gkd-kit/define';

// 菜鸟
export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟[未安装]',
  groups: [
    {
      key: 0,
      name: '通知提示-重要物流信息通知',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds:
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches:
            '[text="重要物流信息无法通知你"] +3 FrameLayout[clickable=true][desc=null][vid=null] + ImageView',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-海量好礼',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds:
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
      rules: [
        {
          key: 100,
          name: '点 x[100]',
          matches:
            'TextView[text$="海量好礼"] +2 FrameLayout[clickable=true][desc=null][vid=null] + ImageView',
        },
      ],
    },
  ],
});
