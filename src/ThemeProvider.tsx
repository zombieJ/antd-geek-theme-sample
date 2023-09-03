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
  const { children, disabled } = props;

  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);

  // Button
  useButtonStyle(getPrefixCls(`btn`));

  // Tag
  useTagStyle(getPrefixCls(`tag`));

  // Switch
  useSwitchStyle(getPrefixCls(`switch`));

  // ====================== Render ======================
  const passedCls = disabled ? null : PREFIX;

  return (
    <ConfigProvider
      button={{ className: passedCls }}
      tag={{ className: passedCls }}
      switch={{ className: passedCls }}
      typography={{ className: passedCls }}
    >
      {children}
    </ConfigProvider>
  );
}
