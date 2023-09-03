import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';

import {
  background,
  borderMask,
  getAnimationBackground,
  getBackgroundAnimation,
} from './gradientUtil';

// ============================== Border ==============================
const genBorderStyle: GenerateStyle<FullToken<'Button'>> = (token) => {
  const { antCls, componentCls, lineWidth } = token;

  const backgroundAnimation = getBackgroundAnimation(lineWidth);

  return {
    [componentCls]: {
      // ======================= Primary =======================
      [`&${antCls}-btn-primary`]: {
        [`&:not(${antCls}-btn-dangerous)`]: {
          ...getAnimationBackground(lineWidth),
          ...backgroundAnimation,
        },
      },

      // ======================= Default =======================
      [`&${antCls}-btn-default`]: {
        [`&:not(${antCls}-btn-dangerous)`]: {
          '&:before': [
            {
              content: '""',
              position: 'absolute',
              inset: -lineWidth,
              padding: lineWidth,
              borderRadius: 'inherit',
              background,

              pointerEvents: 'none',

              mask: borderMask,
              maskComposite: `xor`,

              [`-webkit-mask` as any]: borderMask,
              [`-webkit-mask-composite` as any]: 'exclude',
            },
            {
              [`-webkit-mask-composite` as any]: `xor`,
            },
          ],

          '&:not(:disabled):hover': {
            color: token.colorTextLightSolid,
          },
        },
      },

      // ======================== Hover ========================
      [`&${antCls}-btn-primary, &${antCls}-btn-default`]: {
        [`&:not(:disabled):not(${antCls}-btn-dangerous)`]: {
          '&:hover': {
            filter: `brightness(120%)`,
          },
          '&:active': {
            filter: `brightness(80%)`,
          },
        },
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Button', 'techTheme'], (token) => {
  return [genBorderStyle(token)];
});
