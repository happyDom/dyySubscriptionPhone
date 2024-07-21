import { defineGkdApp } from '@gkd-kit/define';

// 菜鸟
export default defineGkdApp({
  id: 'com.huawei.hwid',
  name: 'HMS Core[未安装]',
  groups: [
    {
      key: 0,
      name: '权限提示-是否允许发送通知',
      desc: '点 禁止',
      enable: true,
      quickFind: true,
      activityIds:
        'com.huawei.hms.runtimekit.stub.HMSKitSingleInstanceCoreTransparentActivity4',
      rules: [
        {
          key: 0,
          name: '禁止[0]',
          matches:
            '@Button[text="禁止"] < * < * -2 * [text^="是否允许"][text$="发送通知？"]',
        },
      ],
    },
  ],
});
