import { RawApp } from '@gkd-kit/api';

interface RawDeprecatedKeysSetting {
  /**
   * 应用ID
   */
  id: string;

  /**
   * 应用名称, 仅用于显示
   */
  name: string;

  /**
   * 废弃的规则组key值，所列出的id值，不允许被使用
   */
  deprecatedKeys: number[];
}

export const checkDeprecatedGroupKeys = (apps: RawApp[]) => {
  apps.forEach((a) => {
    appDeprecatedKeys.forEach((d) => {
      if (a.id === d.id) {
        a.groups.forEach((g) => {
          if (d.deprecatedKeys.indexOf(g.key.valueOf()) !== -1) {
            console.error({
              configName: a.name,
              appId: a.id,
              groupName: g.name,
              groupKey: g.key,
            });
            throw new Error('invalid deprecated group key');
          }
        });
      }
    });
  });
};

const appDeprecatedKeys: RawDeprecatedKeysSetting[] = [
  {
    id: 'com.tencent.mm',
    name: '微信',
    deprecatedKeys: [],
  },
  {
    id: 'com.jincheng.supercaculator',
    name: '全能计算器',
    deprecatedKeys: [],
  },
  {
    id: 'com.smile.gifmaker',
    name: '快手',
    deprecatedKeys: [],
  },
  {
    id: 'com.zhihu.android',
    name: '知乎',
    deprecatedKeys: [],
  },
  {
    id: 'com.kuaishou.nebula',
    name: '快手极速版',
    deprecatedKeys: [],
  },
  {
    id: 'com.ss.android.ugc.aweme.lite',
    name: '抖音极速版',
    deprecatedKeys: [],
  },
  {
    id: 'com.vivaldi.browser',
    name: 'vivaldi浏览器',
    deprecatedKeys: [],
  },
  {
    id: 'com.android.permissioncontroller',
    name: '权限控制器',
    deprecatedKeys: [],
  },
  {
    id: 'com.cainiao.wireless',
    name: '菜鸟',
    deprecatedKeys: [],
  },
  {
    id: 'com.huawei.fastapp',
    name: '华为快应用',
    deprecatedKeys: [],
  },
  {
    id: 'com.huawei.appmarket',
    name: '华为应用市场',
    deprecatedKeys: [],
  },
  {
    id: 'com.huawei.hwid',
    name: 'HMS Core',
    deprecatedKeys: [],
  },
  {
    id: 'com.sankuai.meituan',
    name: '美团',
    deprecatedKeys: [],
  },
  {
    id: 'com.tencent.mobileqq',
    name: '腾讯qq',
    deprecatedKeys: [],
  },
  {
    id: 'cn.dictcn.android.digitize.sw_gjcydcd_10011',
    name: '成语大词典',
    deprecatedKeys: [],
  },
  {
    id: 'com.ailiyong.world.course',
    name: '宝宝巴士科学',
    deprecatedKeys: [],
  },
  {
    id: 'com.android.packageinstaller',
    name: '应用安装器',
    deprecatedKeys: [],
  },
  {
    id: 'com.gzsd.hcrbjthree.huawei',
    name: '火柴人暴击3',
    deprecatedKeys: [],
  },
  {
    id: 'com.huawei.intelligent',
    name: '华为智慧助手',
    deprecatedKeys: [],
  },
  {
    id: 'com.liubowang.drawingboard',
    name: '画画板',
    deprecatedKeys: [],
  },
  {
    id: 'com.outfit7.mytalkingtom2.huawei',
    name: '我的汤姆猫2',
    deprecatedKeys: [],
  },
  {
    id: 'com.sihai.jiujiuxiaogou.huawei',
    name: '救救狗狗',
    deprecatedKeys: [],
  },
  {
    id: 'com.sinyee.babybus.recommendapp',
    name: '宝宝巴士',
    deprecatedKeys: [],
  },
  {
    id: 'com.tencent.qqlive',
    name: '腾讯视频',
    deprecatedKeys: [],
  },
  {
    id: 'com.android.mediacenter',
    name: '华为音乐',
    deprecatedKeys: [],
  },
  {
    id: 'com.autonavi.minimap',
    name: '高德地图',
    deprecatedKeys: [],
  },
];
