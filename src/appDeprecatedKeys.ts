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
];
