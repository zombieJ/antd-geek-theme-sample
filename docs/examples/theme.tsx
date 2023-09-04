/* eslint no-console:0 */

import {
  Button,
  Checkbox,
  ConfigProvider,
  Divider,
  Radio,
  Space,
  Switch,
  // Tag,
  Typography,
  theme,
  Spin,
  Card,
} from 'antd';
import React from 'react';
import { ThemeProvider, Text } from '../../src';

// const { CheckableTag } = Tag;

const Holder = (props: { children?: React.ReactNode }) => {
  const { token } = theme.useToken();
  const { colorBgContainer, padding } = token;

  return (
    <div style={{ background: colorBgContainer, paddingInline: padding }}>
      {props.children}
    </div>
  );
};

const Demo = () => {
  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [componentDisabled, setComponentDisabled] =
    React.useState<boolean>(false);
  // const [checkedTags, setCheckedTags] = React.useState<number[]>([0, 2]);

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

            <Space>
              <Switch
                checkedChildren="Enabled"
                unCheckedChildren="Disable"
                checked={!disabled}
                onChange={() => setDisabled((d) => !d)}
              />

              <Switch
                checkedChildren="Component Disabled"
                unCheckedChildren="Component Disabled"
                checked={componentDisabled}
                onChange={() => setComponentDisabled((d) => !d)}
              />
            </Space>

            <Divider />

            <ConfigProvider componentDisabled={componentDisabled}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingBlock: 32,
                  rowGap: 32,
                }}
              >
                <Checkbox.Group
                  options={new Array(3)
                    .fill(null)
                    .map((_, index) => `option-${index}`)}
                />

                <Radio.Group
                  defaultValue="default"
                  options={['default', 'apple', 'orange']}
                />

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

                {/* CheckedTag has bug that not support CP className yet */}
                {/* <Space>
                  <Switch
                    checkedChildren="So Geek"
                    unCheckedChildren="So Geek"
                    defaultChecked
                  />
                  <Tag onClick={() => {}}>Tag</Tag>
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
                </Space> */}

                <Space>
                  <Spin size="small" />
                  <Spin />
                  <Spin size="large" />
                </Space>

                <Card title="Card Title" size="small" style={{ minWidth: 300 }}>
                  Hello, <Text>Geek Theme</Text>
                </Card>
              </div>
            </ConfigProvider>
          </Holder>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
};

export default Demo;
