import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';

import { background } from '../styles/gradientUtil';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Typography'>> = (token) => {
  const { antCls, componentCls, lineWidth } = token;

  return {
    [componentCls]: {
      fontSize: 'inherit',
      background,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(
  ['Typography', 'techThemeText'],
  (token) => {
    return [genStyle(token)];
  },
);
