import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';

import { getBackground } from './gradientUtil';

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Tag'>> = (token) => {
  const { antCls, componentCls, lineWidth } = token;

  // const tmpCls = componentCls;
  const tmpCls = '.ant-tag';

  return {
    [tmpCls]: {
      [`&${antCls}-tag-checkable`]: {
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
