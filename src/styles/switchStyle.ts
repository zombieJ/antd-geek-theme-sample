import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from './styleUtil';

import { background } from './gradientUtil';
import { DOT_PREFIX } from '../constant';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Switch'>> = (token) => {
  const { componentCls } = token;

  return {
    [`${componentCls}${DOT_PREFIX}`]: {
      [`&${componentCls}&${componentCls}-checked`]: {
        '&, &:hover, &:focus': {
          background: `${background} !important`,
        },
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Switch', 'techTheme'], (token) => {
  return [genStyle(token)];
});
