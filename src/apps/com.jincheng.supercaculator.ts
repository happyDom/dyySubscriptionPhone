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
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      rules: [
        {
          key: 0,
          name: '点 x[0]',
          actionDelay: 100,
          quickFind: true,
          matches: [
            '[text*="扭动或点击" || text="点击 / 扭动" || text="进入小程序" || text="查看详情" || text*="了解更多" || text="立即申请" || text="立即咨询" || text="打开快应用"]',
            'FrameLayout[childCount=1] > ImageView[vid=null][width<70 && height<70]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16939771',
            'https://i.gkd.li/i/16939078',
            'https://i.gkd.li/i/16939109',
            'https://i.gkd.li/i/16734713',
            'https://i.gkd.li/i/16933730',
            'https://i.gkd.li/i/16957320',
          ],
        },
        {
          key: 1,
          name: '点 x[1]',
          quickFind: false,
          matches: [
            '[text="广告"]',
            'View[depth=15 || depth=19][childCount=1] > Image[width<55 && height<55]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/16940010',
            'https://i.gkd.li/i/16940082',
          ],
        },
        {
          key: 2,
          name: '点 x[2]',
          quickFind: false,
          matches: [
            'FrameLayout[childCount=1] > ImageView[vid=null][width<70 && height<70]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/16957296'],
        },
      ],
    },
  ],
});
