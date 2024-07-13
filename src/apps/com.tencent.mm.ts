import { defineGkdApp } from '@gkd-kit/define';

// 微信
export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信[未安装]',
  groups: [
    {
      key: 0,
      name: '分段广告-朋友圈公众号广告',
      desc: '广告->不感兴趣',
      enable: true,
      quickFind: true,
      activityIds: 'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      rules: [
        {
          key: 0,
          name: '打开下拉菜单',
          matches:
            'TextView[vid="kbq"][text*="@"] + FrameLayout[vid="kjq"] >2 ImageView[visibleToUser=true]',
        },
        {
          key: 1,
          name: '不感兴趣',
          preKeys: [0],
          matches:
            '@TextView[text$="不感兴趣"] <<(-1n+5) ViewGroup <2 FrameLayout[depth=0]',
        },
      ],
    },
    {
      key: 1,
      name: '分段广告-订阅号文章内广告卡片',
      desc: '广告->关闭广告',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 100,
          name: '点广告[100]',
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
          matches:
            '[text="广告"][visibleToUser=true][top<1909] + @Image <n [childCount=3] <<4 [childCount=1]',
        },
        {
          key: 101,
          name: '点广告[101]',
          actionCdKey: 100,
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
          matches:
            '[text="广告"][visibleToUser=true][top<1909] + @Image <n [childCount=2] <<6 [childCount=1]',
        },
        {
          key: 125,
          name: '不感兴趣[125]',
          preKeys: [100, 101],
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
          matches:
            '[text="广告"][visibleToUser=true] <(1,2) * + * > *[index=0]',
        },
        {
          key: 136,
          name: '与我无关[136]',
          preKeys: [125],
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
          matches:
            '[text="广告"][visibleToUser=true] <(1,2) * + * > *[index=0]',
        },
      ],
    },
  ],
});
