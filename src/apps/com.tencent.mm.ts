import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信[未安装]',
  groups: [
    {
      key: 1,
      name: '分段广告-朋友圈公众号广告',
      desc: '广告->不感兴趣',
      enable: true,
      quickFind: true,
      activityIds: 'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      rules: [
        {
          key: 100,
          name: '分段广告-朋友圈公众号广告-打开下拉菜单',
          matches:
            'TextView[vid="kbq"][text*="@"] + FrameLayout[vid="kjq"] >2 ImageView[visibleToUser=true]',
        },
        {
          key: 101,
          name: '分段广告-朋友圈公众号广告-不感兴趣',
          preKeys: [100],
          matches:
            '@TextView[text$="不感兴趣"] <<(-1n+5) ViewGroup <2 FrameLayout[depth=0]',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-订阅号文章广告卡片',
      desc: '广告->关闭广告',
      enable: true,
      quickFind: true,
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      rules: [
        {
          key: 200,
          name: '分段广告-订阅号文章广告卡片-打开下拉菜单',
          matches: '[text="广告"][visibleToUser=true] + Image',
        },
        {
          key: 201,
          name: '分段广告-订阅号文章广告卡片-关闭此广告-1',
          preKeys: [200],
          matches:
            '[text="广告"][visibleToUser=true] <(1,2) * + * > *[index=0]',
        },
        {
          key: 202,
          name: '分段广告-订阅号文章广告卡片-关闭此广告-2',
          preKeys: [201],
          matches:
            '[text="广告"][visibleToUser=true] <(1,2) * + * > *[index=0]',
        },
      ],
    },
  ],
});
