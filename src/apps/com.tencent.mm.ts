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
    {
      key: 2,
      name: '分段广告-朋友圈广告卡片',
      desc: '广告->不感兴趣',
      enable: true,
      quickFind: true,
      activityIds: 'com.tencent.mm.plugin.sns.ui.improve.ImproveSnsTimelineUI',
      rules: [
        {
          key: 200,
          name: '点 广告[200]',
          matches: '@ImageView[clickable=true] - [text="广告"]',
        },
        {
          key: 225,
          name: '关闭广告[225]',
          preKeys: [200],
          matches: '[text="关闭广告"][clickable=true]',
        },
        {
          key: 226,
          name: '关闭该广告[226]',
          preKeys: [200],
          actionCdKey: 225,
          matches: '@LinearLayout > [text="关闭该广告"]',
          snapshotUrls: 'https://i.gkd.li/i/17053039',
        },
        {
          key: 250,
          name: '直接关闭[250]',
          preKeys: [226],
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/17053043',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-查看原图',
      desc: '点 查看原图',
      enable: true,
      quickFind: true,
      activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
      rules: [
        {
          key: 300,
          name: '查看原图[300]',
          matches: 'Button[text^="查看原图"]',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-发送原图',
      desc: '勾选 原图',
      enable: true,
      quickFind: true,
      actionCd: 2000,
      activityIds: [
        'com.tencent.mm.plugin.gallery.ui.AlbumPreviewUI',
        'com.tencent.mm.plugin.gallery.ui.ImagePreviewUI',
      ],
      rules: [
        {
          key: 400,
          name: '勾选原图[400]',
          matches: '@[desc*="未选中"] + [text="原图"]',
          snapshotUrls: 'https://i.gkd.li/i/16730906',
        },
      ],
    },
    {
      key: 5,
      name: '功能类-开红包',
      desc: '自动打开红包',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 500,
          name: '点红包[500]',
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          matches:
            'ImageView[desc$="头像"] < * + * [text="微信红包"][visibleToUser=true] < * -2 * > [childCount=1]',
        },
        {
          key: 525,
          name: '开[525]',
          actionCd: 2000,
          preKeys: [500],
          matches: 'Button[desc="开"]',
        },
      ],
    },
    {
      key: 6,
      name: '分段广告-打牌记账小程序',
      desc: '自动关闭广告视频',
      enable: true,
      rules: [
        {
          key: 600,
          name: '跳过[600]',
          quickFind: true,
          activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
          matches: 'TextView[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/17266860',
        },
        {
          key: 605,
          name: '点广告下拉菜单[605]',
          activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
          matches: [
            '[text^="打牌记账"]',
            'TextView[text="广告"] + Image[text="feedback_icon"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/17266758',
        },
        {
          key: 615,
          name: '不感兴趣[615]',
          preKeys: [605],
          matches: 'TextView[text="不感兴趣"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17266765',
        },
        {
          key: 625,
          name: '与我无关[625]',
          preKeys: [615],
          matches: '[text="与我无关"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17266776',
        },
      ],
    },
  ],
});
