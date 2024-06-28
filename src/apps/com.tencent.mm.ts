import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信[未安装]',
  groups: [
    {
      key: 1,
      name: '微信朋友圈公众号广告',
      desc: '打开菜单->不感兴趣',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 100,
          name: '打开下拉菜单',
          activityIds:
            'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
          matches:
            'TextView[vid="kbq"][text*="@"] + FrameLayout[vid="kjq"] >2 ImageView[visibleToUser=true]',
        },
        {
          key: 101,
          name: '不感兴趣',
          preKeys: [100],
          activityIds:
            'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
          matches:
            '@TextView[text$="不感兴趣"] <<(-1n+5) ViewGroup <2 FrameLayout[depth=0]',
        },
      ],
    },
  ],
});
