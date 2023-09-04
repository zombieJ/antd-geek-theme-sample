![Geek Theme](https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*i3kvR6-tozgAAAAAAAAAAAAADrJ8AQ/original)

## About

Sample code in `styles/styleUtil` copy the antd `genComponentStyleHook` function.
You can use any other css-in-js solution to generate style hook like `Emotion` or `styled-components`.

## Usage

Use ThemeProvider to wrap your app.

```tsx
import { ThemeProvider } from 'antd-geek-theme-sample';
import { Button, Space, Switch } from 'antd';
import React from 'react';

const desc = 'Hello World';

const App: React.FC = () => (
  <ThemeProvider>
    <Space>
      <Button type="primary">{desc}</Button>
      <Switch checkedChildren={desc} unCheckedChildren={desc} />
    </Space>
  </ThemeProvider>
);

export default App;
```

## API

### ThemeProvider

Wrapper component will pass config with antd ConfigProvider.

## Development

```
npm install
npm start
```

## Test Case

```
npm test
npm run coverage
```

open coverage/ dir

## License

antd-geek-theme-sample is under the MIT license.
