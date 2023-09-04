import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from '../styles/styleUtil';

import { background } from '../styles/gradientUtil';
import { DOT_PREFIX } from '../constant';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Typography'>> = (token) => {
  const { componentCls } = token;

  return {
    [componentCls]: {
      fontSize: 'inherit',

      [`&${DOT_PREFIX}`]: {
        background,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      },
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
