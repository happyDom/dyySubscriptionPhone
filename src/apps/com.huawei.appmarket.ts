import { defineGkdApp } from '@gkd-kit/define';

// 菜鸟
export default defineGkdApp({
  id: 'com.huawei.appmarket',
  name: '华为应用市场[未安装]',
  groups: [
    {
      key: 0,
      name: '权限提示-新增权限异常警告',
      desc: '点 收起(向下箭头)',
      enable: true,
      quickFind: true,
      activityIds:
        'com.huawei.appgallery.upgraderecommendation.ui.v1.UpgradeRecommendV1Activity',
      rules: [
        {
          key: 0,
          name: '点 收起箭头[0]',
          matches:
            '@LinearLayout[vid="ll_arrow_down"] + * [text="安全检测新增权限异常告警"]',
        },
      ],
    },
  ],
});
