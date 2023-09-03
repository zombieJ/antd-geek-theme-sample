import { Keyframes } from '@ant-design/cssinjs';
import type { CSSInterpolation, CSSObject } from '@ant-design/cssinjs';

export const background = `linear-gradient(135deg, ${[
  '#f7797d',
  '#c471ed 35%',
  '#12c2e9',
].join(',')})`;

export const getBackground = (lineWidth: number = 0) => ({
  background,
  backgroundSize: `calc(100% + ${lineWidth * 2}px) calc(100% + ${
    lineWidth * 2
  }px)`,
  backgroundPosition: `-${lineWidth}px -${lineWidth}px`,
});

export const animationBackground = `linear-gradient(-45deg, ${[
  '#f7797d',
  '#c471ed 24%',
  '#12c2e9 48%',
  '#12c2e9 52%',
  '#c471ed 76%',
  '#f7797d',
].join(',')})`;

export const getAnimationBackground = (lineWidth: number = 0): CSSObject => ({
  backgroundImage: animationBackground,
  backgroundSize: `calc(200% + ${lineWidth * 4}px) calc(200% + ${
    lineWidth * 4
  }px)`,
  backgroundPosition: `-${lineWidth}px -${lineWidth}px`,
});

export const borderMask = [
  `linear-gradient(#fff 0 0) content-box`,
  `linear-gradient(#fff 0 0)`,
].join(',');

export const getBackgroundAnimation = (lineWidth: number = 0) => {
  const rotateKeyframes = new Keyframes('gradient-rotate', {
    '50%': {
      backgroundPosition: `calc(100% + ${lineWidth}px) -${lineWidth}px`,
    },
  });

  const backgroundAnimation: CSSObject = {
    animationName: rotateKeyframes,
    animationDuration: '10s',
    animationIterationCount: 'infinite',
  };

  return backgroundAnimation;
};

export const getBorderStyle = (lineWidth: number = 0): CSSObject[] => [
  {
    content: '""',
    position: 'absolute',
    inset: -lineWidth,
    padding: lineWidth,
    borderRadius: 'inherit',
    background,
    zIndex: 1,
    transition: 'all 0.3s',

    pointerEvents: 'none',

    mask: borderMask,
    maskComposite: `xor`,

    WebkitMask: borderMask,
    WebkitMaskComposite: 'exclude',
  },
  {
    WebkitMaskComposite: `xor`,
  },
];
