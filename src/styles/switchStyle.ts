import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';
import { CSSObject, Keyframes } from '@ant-design/cssinjs';

import { background, getBackground } from './gradientUtil';
import { DOT_PREFIX } from '../constant';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Switch'>> = (token) => {
  const { componentCls } = token;

  return {
    [`${componentCls}${DOT_PREFIX}`]: {
      [`&${componentCls}&${componentCls}-checked`]: {
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
