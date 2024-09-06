import { defineGkdApp } from '@gkd-kit/define';

// 知乎
export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎[未安装]',
  groups: [
    {
      key: 0,
      name: '全屏广告-重要消息通知',
      desc: 'x 掉',
      enable: true,
      quickFind: true,
      activityIds: 'com.zhihu.android.app.ui.activity.HostActivity',
      rules: [
        {
          key: 0,
          name: 'x 掉消息弹窗',
          matches: '@[vid="btn_close"] +n [text="开启重要消息通知"]',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-自动查看新消息',
      desc: '关注->收藏->赞同->评论',
      enable: true,
      quickFind: true,
      actionCdKey: 1000,
      activityIds: 'com.zhihu.android.app.ui.activity.HostActivity',
      rules: [
        {
          key: 100,
          name: '新增关注',
          matches: '[text="新增关注"] - [vid="count_view"] - ImageView',
        },
        {
          key: 101,
          name: '收藏了我',
          matches: '[text="收藏了我"] - [vid="count_view"] - ImageView',
        },
        {
          key: 102,
          name: '赞同喜欢',
          matches: '[text="赞同喜欢"] - [vid="count_view"] - ImageView',
        },
        {
          key: 103,
          name: '评论转发',
          matches: '[text="评论转发"] - [vid="count_view"] - ImageView',
        },
      ],
    },
    {
      name: '局部广告-推荐页置顶广告',
      key: 2,
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        {
          key: 205,
          name: '点 x[205]',
          matches: 'FrameLayout[vid="ad_container"] [vid="img_close_focus"]',
          snapshotUrls: 'https://i.gkd.li/i/16886757',
        },
      ],
    },
    {
      name: '分段广告-xxx 的广告',
      key: 3,
      desc: '点 x -> 不感兴趣',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 305,
          name: '点 x[305]',
          activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
          matches:
            'TextView[text=" 的广告"] <(1,2) * <n * +n * ViewGroup[childCount=1] ImageView[vid=null && height<70 && width<70][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16886915',
            'https://i.gkd.li/i/16901094',
          ],
        },
        {
          key: 306,
          name: '点 x[306]',
          actionCdKey: 305,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            'TextView[text$="的广告"] <2 * + TextView[text=null] + ImageView[vid=null && height<70][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16892903',
        },
        {
          key: 307,
          name: '点 x[307]',
          actionCdKey: 305,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '[text$="的广告"] +3 @ImageView[visibleToUser=true] - ViewGroup TextView[text="立即下载"]',
          snapshotUrls: ['https://i.gkd.li/i/16887120'],
        },
        {
          key: 308,
          name: '点 x[308]',
          actionCdKey: 305,
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches: 'TextView[text$="的广告"] +3 ImageView',
          snapshotUrls: 'https://i.gkd.li/i/16895251',
        },
        {
          key: 325,
          name: '不感兴趣[325]',
          preKeys: [305, 306],
          matches:
            'TextView[text="屏蔽这条广告:"] < * +n * TextView[text*="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/i/16887052'],
        },
      ],
    },
    {
      name: '功能类-自动播放GIF',
      key: 8,
      desc: '点GIF图标',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 800,
          name: '点GIF图标[800]',
          action: 'clickNode',
          matches:
            '@ImageView[vid="image_normal"][clickable=true] + * > [vid="text_gif"][text="GIF"][visibleToUser=true]',
        },
      ],
    },
    {
      name: '功能类-查看原图',
      key: 9,
      desc: '点 查看原图',
      enable: true,
      quickFind: true,
      activityIds: 'com.zhihu.android.picture.activity.ImagesViewerActivity',
      rules: [
        {
          key: 900,
          name: '查看原图[900]',
          matches: '[text="查看原图"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      name: '功能类-感谢您的创作',
      key: 10,
      desc: '点 完成',
      enable: true,
      quickFind: true,
      activityIds: 'com.zhihu.android.panel.ng.ui.PublishFeedBackActivity',
      rules: [
        {
          key: 1000,
          name: '完成[1000]',
          matches:
            '@TextView[text="完成"] + * >3 [text^="感谢你的第"][text$="篇创作！"]',
        },
      ],
    },
    {
      name: '功能类-评论氛围',
      key: 12,
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 1200,
          name: '点 x[1200]',
          matches:
            '@UIImage[text="关闭,按钮"] +n [text*="评论氛围"][text*="是否满意？"]',
        },
      ],
    },
    {
      name: '局部广告-顶部广告卡片',
      key: 13,
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.zhihu.android.app.ui.activity.MainActivity',
      rules: [
        {
          key: 1300,
          name: '点 x[1300]',
          matches: '[vid="ad_container"] ImageView[vid="img_close_focus"]',
        },
      ],
    },
    {
      name: '局部广告-关注小弹窗',
      key: 14,
      desc: '点 x',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 1410,
          name: '点 x[1410]',
          activityIds:
            'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
          matches:
            '@[vid="close_img"] +n [vid="sub_title_tv"][text^="看了这么久，点个关注"]',
        },
      ],
    },
    {
      name: '全屏广告-内容推送通知',
      key: 16,
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds:
        'com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity',
      rules: [
        {
          key: 1610,
          name: '优质内容推送：点 x[1610]',
          matches: '@[vid="btn_close"] +n [text$="优质内容推送"]',
          snapshotUrls: 'https://i.gkd.li/i/16534868',
        },
      ],
    },
    {
      name: '局部广告-分享提示',
      key: 17,
      desc: '点 x',
      enable: true,
      activityIds:
        'com.zhihu.android.mixshortcontainer.MixShortContainerActivity',
      rules: [
        {
          key: 1705,
          name: '快分享给好友吧：点 x[1705]',
          matches:
            '[text="快分享给好友吧！"] <n * View Image[width<50 && height<50]',
          snapshotUrls: 'https://i.gkd.li/i/16685752',
        },
      ],
    },
  ],
});
