import { ConfigProvider } from 'antd';
import useButtonStyle from './styles/buttonStyle';
import useTagStyle from './styles/tagStyle';
import useSwitchStyle from './styles/switchStyle';
import * as React from 'react';
import { PREFIX } from './constant';

type ConfigProviderProps = Parameters<typeof ConfigProvider>[0];

type WaveConfig = NonNullable<ConfigProviderProps>['wave'];

export interface ThemeProviderProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);

  // Button
  const techBtnPrefixCls = getPrefixCls(`btn_${PREFIX}`);
  useButtonStyle(techBtnPrefixCls);

  // Tag
  const techTagPrefixCls = getPrefixCls(`tag_${PREFIX}`);
  useTagStyle(techTagPrefixCls);

  // Switch
  const techSwitchPrefixCls = getPrefixCls(`switch_${PREFIX}`);
  useSwitchStyle(techSwitchPrefixCls);

  return (
    <ConfigProvider
      button={{ className: techBtnPrefixCls }}
      tag={{ className: techTagPrefixCls }}
      switch={{ className: techSwitchPrefixCls }}
    >
      {children}
    </ConfigProvider>
  );
}
