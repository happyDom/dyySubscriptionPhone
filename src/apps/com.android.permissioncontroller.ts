import { defineGkdApp } from '@gkd-kit/define';

// 系统权限控制器
export default defineGkdApp({
  id: 'com.android.permissioncontroller',
  name: '权限控制器[安卓版]',
  groups: [
    {
      key: 0,
      name: '权限提示-通知权限',
      desc: '禁止',
      enable: true,
      quickFind: true,
      activityIds:
        'com.android.permissioncontroller.permission.ui.GrantPermissionsActivity',
      rules: [
        {
          key: 0,
          name: '禁止[0]',
          snapshotUrls: 'https://i.gkd.li/i/16236205',
          matches:
            '@Button[vid="permission_deny_button"][text="禁止"] < * < * - ScrollView >n TextView[text$="发送通知？"]',
        },
      ],
    },
  ],
});
