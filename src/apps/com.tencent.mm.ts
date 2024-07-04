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
      name: '分段广告-订阅号文章广告卡片',
      desc: '广告->关闭广告',
      enable: true,
      quickFind: true,
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
      rules: [
        {
          key: 100,
          name: '打开下拉菜单',
          matches: '[text="广告"][visibleToUser=true][top<1909] + Image',
        },
        {
          key: 101,
          name: '关闭此广告-1',
          preKeys: [100],
          matches:
            '[text="广告"][visibleToUser=true] <(1,2) * + * > *[index=0]',
        },
        {
          key: 102,
          name: '关闭此广告-2',
          preKeys: [101],
          matches:
            '[text="广告"][visibleToUser=true] <(1,2) * + * > *[index=0]',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-订阅号文章列表页广告卡片',
      desc: '广告->关闭广告',
      enable: false,
      quickFind: true,
      activityIds:
        'com.tencent.mm.plugin.brandservice.ui.flutter.BizFlutterTLFlutterViewActivity',
      rules: [
        {
          key: 200,
          name: '打开下拉菜单',
          matches: 'View[desc="广告"]',
          position: {
            right: 'width*0.1352',
            top: 'width*0.0852',
          },
        },
        {
          key: 201,
          name: '点 不感兴趣',
          preKeys: [200],
          matches: '[desc="菜单"] +n View[childCount=0]',
          position: {
            left: 'width*0.5',
            top: 'height*0.5',
          },
        },
        {
          key: 202,
          name: '点 与我无关',
          preKeys: [201],
          matches: '[desc="菜单"] +n View[childCount=0]',
          position: {
            left: 'width*0.333',
            bottom: 'height*0.4',
          },
        },
      ],
    },
  ],
});
