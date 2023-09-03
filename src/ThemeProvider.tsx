import { ConfigProvider } from 'antd';
import useButtonStyle from './styles/buttonStyle';
import useTagStyle from './styles/tagStyle';
import useSwitchStyle from './styles/switchStyle';
import useCheckboxStyle from './styles/checkboxStyle';
import useRadioStyle from './styles/radioStyle';
import useSpinStyle from './styles/spinStyle';
import useDividerStyle from './styles/dividerStyle';
import useCardStyle from './styles/cardStyle';
import * as React from 'react';
import { PREFIX } from './constant';

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

  // Checkbox
  useCheckboxStyle(getPrefixCls(`checkbox`));

  // Radio
  useRadioStyle(getPrefixCls(`radio`));

  // Spin
  useSpinStyle(getPrefixCls(`spin`));

  // Divider
  useDividerStyle(getPrefixCls(`divider`));

  // Card
  useCardStyle(getPrefixCls(`card`));

  // ====================== Render ======================
  const passedCls = disabled ? null : PREFIX;

  return (
    <ConfigProvider
      button={{ className: passedCls }}
      tag={{ className: passedCls }}
      switch={{ className: passedCls }}
      typography={{ className: passedCls }}
      checkbox={{ className: passedCls }}
      radio={{ className: passedCls }}
      spin={{ className: passedCls }}
      divider={{ className: passedCls }}
      card={{ className: passedCls }}
    >
      {children}
    </ConfigProvider>
  );
}
