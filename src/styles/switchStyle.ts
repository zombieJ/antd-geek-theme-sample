import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';
import { CSSObject, Keyframes } from '@ant-design/cssinjs';

import { background, getBackground } from './gradientUtil';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Switch'>> = (token) => {
  const { antCls, componentCls } = token;

  return {
    [componentCls]: {
      [`&${componentCls}&${antCls}-switch-checked`]: {
        '&, &:hover, &:focus': {
          background,
        },
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Switch', 'techTheme'], (token) => {
  return [genStyle(token)];
});
