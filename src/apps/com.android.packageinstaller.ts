import { defineGkdApp } from '@gkd-kit/define';

// 应用安装器
export default defineGkdApp({
  id: 'com.android.packageinstaller',
  name: '应用安装器',
  groups: [
    {
      key: 0,
      name: '权限提示-通话权限',
      desc: '禁止',
      enable: true,
      quickFind: true,
      resetMatch: 'app',
      activityIds:
        'com.android.packageinstaller.permission.ui.GrantPermissionsActivity',
      rules: [
        {
          key: 0,
          name: '禁止后不再提示[0]',
          matches:
            '[text$="拨打电话和管理通话？"] +(5-n) CheckBox[text="禁止后不再提示"]',
        },
        {
          key: 25,
          name: '禁止[25]',
          preKeys: 0,
          matches: 'Button[text="禁止"]',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-安装应用(来源：快应用中心)',
      desc: '点 取消',
      enable: true,
      quickFind: true,
      activityIds: 'com.android.packageinstaller.InstallStaging',
      rules: [
        {
          key: 100,
          name: '取消[100]',
          matches: '@Button[text="取消"] < * - * [text="安装来源：快应用中心"]',
        },
      ],
    },
  ],
});
