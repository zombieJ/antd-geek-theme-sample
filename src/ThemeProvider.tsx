import { ConfigProvider } from 'antd';
import useEvent from 'rc-util/lib/hooks/useEvent';
import { render, unmount } from 'rc-util/lib/React/render';
import * as React from 'react';

type ConfigProviderProps = Parameters<typeof ConfigProvider>[0];

type WaveConfig = NonNullable<ConfigProviderProps>['wave'];

type ShowEffect = NonNullable<WaveConfig>['showEffect'];

export interface ThemeProviderProps {
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  return <ConfigProvider>{children}</ConfigProvider>;
}
