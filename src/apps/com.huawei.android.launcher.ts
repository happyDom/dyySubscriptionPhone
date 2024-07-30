import { defineGkdApp } from '@gkd-kit/define';

// 华为桌面
export default defineGkdApp({
  id: 'com.huawei.android.launcher',
  name: '华为桌面[未安装]',
  groups: [
    {
      key: 0,
      name: '功能类-添加到主屏幕',
      desc: '取消',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 0,
          name: '取消[0]',
          activityIds: 'com.huawei.android.launcher.dragndrop.AddItemActivity',
          matches:
            '[text="添加到主屏幕"] < * < * < LinearLayout >3 Button[text="取消"]',
        },
      ],
    },
  ],
});
