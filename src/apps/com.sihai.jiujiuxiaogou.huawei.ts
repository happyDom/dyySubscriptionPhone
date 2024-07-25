import { defineGkdApp } from '@gkd-kit/define';

// 救救狗狗
export default defineGkdApp({
  id: 'com.sihai.jiujiuxiaogou.huawei',
  name: '救救狗狗[未安装]',
  groups: [
    {
      key: 0,
      name: '局部广告-页脚广告',
      desc: '点 x',
      enable: true,
      quickFind: true,
      actionCdKey: 0,
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          activityIds: 'org.cocos2dx.javascript.AppActivity',
          matches:
            '[vid="native_small_view"] [text="广告"] <(-1n+5) [vid="center_view"] + ImageView',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告',
      desc: '点 x',
      enable: true,
      quickFind: true,
      actionCdKey: 100,
      rules: [
        {
          key: 100,
          name: '点 x[100]',
          activityIds: 'org.cocos2dx.javascript.AppActivity',
          matches: '[vid="native_inter"] [text="Ad"] <n ViewGroup > ImageView',
        },
      ],
    },
  ],
});
