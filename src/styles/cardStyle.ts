import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from './styleUtil';

import { getBorderStyle } from './gradientUtil';
import { DOT_PREFIX } from '../constant';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Card'>> = (token) => {
  const { componentCls, lineWidth } = token;

  return {
    [`${componentCls}${DOT_PREFIX}`]: {
      '&:before': getBorderStyle(lineWidth),

      [`${componentCls}-head`]: {
        position: 'relative',

        '&:before': [
          ...getBorderStyle(lineWidth),
          {
            transition: 'none',
          },
        ],
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Card', 'techTheme'], (token) => {
  return [genStyle(token)];
});
