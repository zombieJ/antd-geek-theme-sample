import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  alias: {
    'antd-geek-theme-sample$': path.resolve('src'),
    'antd-geek-theme-sample/es': path.resolve('src'),
  },
  mfsu: false,
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Geek Theme',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
  styles: [
    `
      html .dumi-default-hero-title {
        font-size: 120px;
      }

      .dumi-default-previewer-demo {
        position: relative;
        min-height: 300px;
      }
    `,
  ],
});
