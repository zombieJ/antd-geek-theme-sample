import {
  type GenerateStyle,
  genComponentStyleHook,
  type FullToken,
} from 'antd/es/theme/internal';

import { background } from './gradientUtil';
import { DOT_PREFIX } from '../constant';

const DOT_COUNT = 9;
const DOT_DIST = 30;
const DOT_MIN_SIZE = 0;
const DOT_MAX_SIZE = 10;

// ============================== Border ==============================
const genStyle: GenerateStyle<FullToken<'Spin'>> = (token) => {
  const { componentCls } = token;

  const getCircle = (pos: string, sizePtg: number) =>
    `radial-gradient(circle at ${pos}, #fff 0, #fff ${sizePtg}%, transparent ${sizePtg}%)`;

  const mask = new Array(DOT_COUNT)
    .fill(null)
    .map((_, index) => {
      const angle = index * (360 / DOT_COUNT);
      const size =
        DOT_MIN_SIZE + (DOT_MAX_SIZE - DOT_MIN_SIZE) * (index / DOT_COUNT);

      const pos = [
        `${50 + Math.sin((angle * Math.PI) / 180) * DOT_DIST}%`,
        `${50 - Math.cos((angle * Math.PI) / 180) * DOT_DIST}%`,
      ].join(' ');

      return getCircle(pos, size);
    })
    .join(',');

  return {
    [`${componentCls}${DOT_PREFIX}`]: {
      // Hide dot item
      [`${componentCls}-dot-item`]: {
        display: 'none',
      },

      // Customize effect
      [`${componentCls}-dot`]: {
        backgroundImage: background,

        mask,
        WebkitMask: mask,
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook(['Spin', 'techTheme'], (token) => {
  return [genStyle(token)];
});
