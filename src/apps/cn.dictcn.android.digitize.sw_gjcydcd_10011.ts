import { defineGkdApp } from '@gkd-kit/define';

// 成语大词典
export default defineGkdApp({
  id: 'cn.dictcn.android.digitize.sw_gjcydcd_10011',
  name: '成语大词典[未安装]',
  groups: [
    {
      key: 0,
      name: '全屏广告-会员提示',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'cn.dictcn.android.digitize.module.home.ui.MainPadActivity',
      rules: [
        {
          key: 0,
          name: '点 x',
          matches:
            '@ImageView[vid="iv_close"] + * TextView[text^="当前为免费版，请升级为VIP会员"]',
        },
      ],
    },
  ],
});
