import { defineGkdApp } from '@gkd-kit/define';

// 抖音极速版
export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版[未安装]',
  groups: [
    {
      key: 0,
      name: '功能类-自动展开视频标题',
      desc: '点 展开',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 0,
          name: '点 展开',
          actionDelay: 330,
          matches: '[text="展开"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-动态提醒弹窗',
      desc: '点 暂不开启',
      actionMaximum: 1,
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 100,
          name: '点 暂不开启',
          matches:
            '[vid="ky_"][text="及时获得动态提醒"] +n [vid="i2e"][text="暂不开启"]',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-评论氛围满意调查',
      desc: '点 x',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 200,
          name: '点 x',
          matches: '[text*="评论氛围是否满意"] + [text="关闭,按钮"]',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-好物推荐',
      desc: '点 不感兴趣',
      enable: true,
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
      rules: [
        {
          key: 300,
          name: '点 不感兴趣',
          actionDelay: 330,
          matches: '@FlattenUIText[text="不感兴趣"] + [text="查看更多好物"]',
        },
      ],
    },
  ],
});
