/* eslint no-console:0 */

import {
  Button,
  Checkbox,
  ConfigProvider,
  Divider,
  Radio,
  Space,
  Switch,
  Tag,
  Typography,
  theme,
} from 'antd';
import React from 'react';
import { ThemeProvider, Text } from '../../src';

const { CheckableTag } = Tag;

const Holder = (props: { children?: React.ReactNode }) => {
  const { token } = theme.useToken();
  const { colorBgContainer, paddingXS } = token;

  return (
    <div style={{ background: colorBgContainer, padding: paddingXS }}>
      {props.children}
    </div>
  );
};

const Demo = () => {
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [checkedTags, setCheckedTags] = React.useState<number[]>([0, 2]);

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <ThemeProvider disabled={disabled}>
          <Holder>
            <Typography.Title>
              Hello, <Text>Geek Theme</Text>
            </Typography.Title>

            <Typography.Paragraph>
              This theme is base on the token system of Ant Design.{' '}
              <Text>Have a nice day~</Text>
            </Typography.Paragraph>

            <Switch
              checkedChildren="Enabled"
              unCheckedChildren="Disable"
              checked={!disabled}
              onChange={() => setDisabled((d) => !d)}
            />
            <Divider />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBlock: 32,
                rowGap: 32,
              }}
            >
              <Radio.Group options={['default', 'apple', 'orange']} />

              <Space>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="primary" danger>
                  Danger
                </Button>
                <Button type="text">Text</Button>
                <Button type="link">Link</Button>
              </Space>
              <Space>
                {new Array(3).fill(null).map((_, index) => (
                  <CheckableTag
                    key={index}
                    checked={checkedTags.includes(index)}
                    onChange={(checked) => {
                      setCheckedTags((tags) => {
                        if (checked) {
                          return [...tags, index];
                        }
                        return tags.filter((t) => t !== index);
                      });
                    }}
                  >
                    Tag {index}
                  </CheckableTag>
                ))}
              </Space>
              <Space>
                <Switch
                  checkedChildren="So Geek"
                  unCheckedChildren="So Geek"
                  defaultChecked
                />
                <Tag onClick={() => {}}>Tag</Tag>
              </Space>

              <Checkbox.Group
                options={new Array(3)
                  .fill(null)
                  .map((_, index) => `option-${index}`)}
              />
            </div>
          </Holder>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default Demo;
