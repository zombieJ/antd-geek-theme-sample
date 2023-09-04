import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from './styleUtil';

import { getBackground, getBorderStyle } from './gradientUtil';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Tag'>> = (token) => {
  const { componentCls, lineWidth } = token;

  return {
    // TODO: CheckableTag missing CP className
    [componentCls]: {
      [`&:not(${componentCls}-checkable)`]: {
        '&:before': getBorderStyle(lineWidth),
      },

      [`&${componentCls}-checkable`]: {
        borderColor: 'transparent !important',
        background: token.colorBgContainerDisabled,
        backgroundPosition: `-${lineWidth}px -${lineWidth}px`,
        transition: 'all 0.3s',

        [`&-checked`]: {
          ...getBackground(lineWidth),
        },

        '&:hover': {
          color: token.colorTextLightSolid,
        },
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Tag', 'techTheme'], (token) => {
  return [genStyle(token)];
});
