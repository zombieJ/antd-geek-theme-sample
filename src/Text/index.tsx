import * as React from 'react';
import { ConfigProvider, Typography } from 'antd';
import classNames from 'classnames';
import useStyle from './style';

export type TextProps = React.HtmlHTMLAttributes<HTMLSpanElement>;

export default function Text(props: TextProps) {
  const { children, className, ...restProps } = props;

  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('geek-text');

  useStyle(prefixCls);

  return (
    <Typography.Text {...restProps} className={classNames(prefixCls)}>
      {children}
    </Typography.Text>
  );
}
