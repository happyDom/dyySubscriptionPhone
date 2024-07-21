import { defineGkdApp } from '@gkd-kit/define';

// 美团
export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团[未安装]',
  groups: [
    {
      key: 0,
      name: '功能类-再逛逛',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.meituan.android.lightbox.activity.LightBoxActivity',
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches: '@ImageView[vid="iv_close"] - * Button[text="再逛逛"]',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-残忍离开',
      desc: '点 残忍离开',
      enable: true,
      quickFind: true,
      activityIds: 'com.meituan.android.lightbox.activity.LightBoxActivity',
      rules: [
        {
          key: 100,
          name: '残忍离开[100]',
          matches: 'Button[text="残忍离开"]',
        },
      ],
    },
  ],
});
