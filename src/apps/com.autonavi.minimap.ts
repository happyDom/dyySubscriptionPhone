import { defineGkdApp } from '@gkd-kit/define';

// 高德地图
export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图[未安装]',
  groups: [
    {
      key: 0,
      name: '局部广告-1',
      desc: '点 x',
      enable: true,
      quickFind: true,
      actionCdKey: 0,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          matches:
            'ViewGroup[clickable=true] > ImageView[desc="关闭"][visibleToUser=true]',
        },
        {
          key: 1,
          name: '点 x[1]',
          matches:
            '@ImageView[visibleToUser=true] < ViewGroup[clickable=true] - ViewGroup View[text$="礼包"]',
        },
      ],
    },
  ],
});
