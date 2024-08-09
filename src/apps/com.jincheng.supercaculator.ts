import { defineGkdApp } from '@gkd-kit/define';

// 全能计算器
export default defineGkdApp({
  id: 'com.jincheng.supercaculator',
  name: '全能计算器[未安装]',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: 'x 掉',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionCdKey: 0,
      actionMaximumKey: 0,
      quickFind: true,
      actionDelay: 300,
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          actionDelay: 450,
          matches: '[text="广告"] <<4 View +2 View > Image',
        },
        {
          key: 1,
          name: '点 x[1]',
          matches:
            'TextView[text="立即申请"] <<2 FrameLayout -(-1n+5) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 2,
          name: '点 x[2]',
          matches:
            'TextView[text="查看详情"] <<2 FrameLayout -(-1n+5) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 3,
          name: '点 x[3]',
          matches:
            'TextView[text*="了解更多"] <<(2,3) FrameLayout -(2,3) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 4,
          name: '点 x[4]',
          matches:
            'TextView[text="进入小程序"] <<2 FrameLayout -(-1n+5) FrameLayout > FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 5,
          name: '点 x[5]',
          matches:
            'TextView[text="立即申请"] <<2 FrameLayout -3 FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 6,
          name: '点 x[6]',
          matches:
            'TextView[text="查看详情"] <<2 FrameLayout -3 FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 7,
          name: '点 x[7]',
          matches:
            'TextView[text*="了解更多"] <<(2,3) FrameLayout -(2,3) FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 8,
          name: '点 x[8]',
          matches:
            'TextView[text="进入小程序"] <<2 FrameLayout -3 FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 9,
          name: '点 x[9]',
          matches:
            'TextView[text="进入小程序"] <<2 FrameLayout -3 FrameLayout > ImageView[visibleToUser=true]',
        },
        {
          key: 10,
          name: '点 x[10]',
          quickFind: false,
          matches:
            '@Image[text=""][width<100][height<100] < View <(10-n) View [text="反馈"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16538288',
            'https://i.gkd.li/i/16538295',
            'https://i.gkd.li/i/16538299',
            'https://i.gkd.li/i/16554962',
          ],
        },
      ],
    },
  ],
});
