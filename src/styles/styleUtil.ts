export * from 'antd/es/theme/internal';
import { theme as Theme, ConfigProvider, GlobalToken } from 'antd';
import { CSSInterpolation, useStyleRegister } from '@ant-design/cssinjs';
import {
  FullToken,
  OverrideComponent,
} from 'antd/es/theme/util/genComponentStyleHook';
import React from 'react';

// Copy from antd `genComponentStyleHook`, you can use any other CSS-in-JS library instead.
export function genComponentStyleHook<ComponentName extends OverrideComponent>(
  componentNames: [ComponentName, string],
  styleFn: (token: GlobalToken) => CSSInterpolation,
) {
  const concatComponent = componentNames.join('-');

  return (prefixCls: string): void => {
    const { theme, token, hashId } = Theme.useToken();
    const { getPrefixCls, iconPrefixCls } = React.useContext(
      ConfigProvider.ConfigContext,
    );
    const rootPrefixCls = getPrefixCls();

    // Shared config
    const sharedConfig: Omit<Parameters<typeof useStyleRegister>[0], 'path'> = {
      theme,
      token,
      hashId,
    };

    useStyleRegister(
      { ...sharedConfig, path: [concatComponent, prefixCls, iconPrefixCls] },
      () => {
        const componentCls = `.${prefixCls}`;

        const mergedToken = {
          ...token,
          componentCls,
          prefixCls,
          iconCls: `.${iconPrefixCls}`,
          antCls: `.${rootPrefixCls}`,
        };

        const styleInterpolation = styleFn(
          mergedToken as any as FullToken<ComponentName>,
        );
        return styleInterpolation;
      },
    );
  };
}
