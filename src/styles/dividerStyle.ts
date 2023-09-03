import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';

import { background } from './gradientUtil';
import { DOT_PREFIX } from '../constant';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Divider'>> = (token) => {
  const { componentCls, lineWidth } = token;

  return {
    [`${DOT_PREFIX}${componentCls}`]: {
      [`&${componentCls}-horizontal`]: {
        border: 'none',
        height: lineWidth,
        background,
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Divider', 'techTheme'], (token) => {
  return [genStyle(token)];
});
