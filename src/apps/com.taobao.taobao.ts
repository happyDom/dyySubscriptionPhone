import { defineGkdApp } from '@gkd-kit/define';

// 淘宝
export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝[未安装]',
  groups: [
    {
      key: 0,
      name: '全屏广告',
      desc: '点 x',
      enable: true,
      rules: [
        {
          key: 5,
          name: '跳过[5]',
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            '@ImageView[clickable=true && desc="关闭按钮" && visibleToUser=true] <n * [text=null][desc*="福利" || desc*="砸中"]',
          snapshotUrls: 'https://i.gkd.li/i/16555208',
        },
      ],
    },
  ],
});
