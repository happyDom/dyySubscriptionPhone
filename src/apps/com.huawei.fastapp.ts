import { defineGkdApp } from '@gkd-kit/define';

// 华为快应用中心
export default defineGkdApp({
  id: 'com.huawei.fastapp',
  name: '华为快应用中心',
  groups: [
    {
      key: 0,
      name: '功能类-快应用直接返回',
      desc: '进入快应用后，直接点击返回键，退出快应用',
      enable: true,
      quickFind: true,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          name: '点返回键',
          matches: '[depth=0]',
          action: 'back',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-添加该游戏至桌面',
      desc: '点 退出',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 100,
          name: '退出[100]',
          matches:
            '@Button[text="退出"] < * < * - * [text="添加该游戏至桌面？"]',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-玩点不一样的',
      desc: '点 退出游戏',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 200,
          name: '退出游戏[200]',
          matches: '@[text="退出游戏"] <2 * < * - * [text="玩点不一样的"]',
        },
      ],
    },
    {
      key: 3,
      name: '功能类-跳出的其它快应用',
      desc: '点 退出该快应用',
      enable: true,
      quickFind: true,
      rules: [
        {
          key: 300,
          name: '点 退出[300]',
          activityIds: [
            'com.huawei.fastapp.app.processManager.PageLoaderActivityEntryPort1',
            'com.huawei.fastapp.app.processManager.PageLoaderActivityEntryPort2',
            'com.huawei.fastapp.app.processManager.PageLoaderActivityEntryPort3',
            'com.huawei.fastapp.app.processManager.PageLoaderActivityEntryPort4',
            'com.huawei.fastapp.app.processManager.PageLoaderActivityEntryPort5',
            'com.huawei.fastapp.app.processManager.RpkLoaderActivityEntry1',
            'com.huawei.fastapp.app.processManager.RpkLoaderActivityEntry2',
            'com.huawei.fastapp.app.processManager.RpkLoaderActivityEntry3',
            'com.huawei.fastapp.app.processManager.RpkLoaderActivityEntry4',
            'com.huawei.fastapp.app.processManager.RpkLoaderActivityEntry5',
          ],
          matches: 'Button[vid="rl_menu_mini"][desc="关闭"]',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-未观看完视频',
      desc: '点 取消',
      enable: true,
      quickFind: true,
      activityIds:
        'com.huawei.fastapp.app.processManager.RpkLoaderActivityEntry0',
      rules: [
        {
          key: 400,
          name: '点 取消[400]',
          matches: '[text="未观看完视频"] +n * Button[vid="cancel_button"]',
        },
      ],
    },
  ],
});
