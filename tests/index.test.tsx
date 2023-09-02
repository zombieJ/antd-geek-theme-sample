import { act, fireEvent, render } from '@testing-library/react';
import { Button } from 'antd';
import { spyElementPrototype } from 'rc-util/lib/test/domHook';
import * as React from 'react';
import { ThemeProvider } from '../src';

describe('HappyWork', () => {
  beforeAll(() => {
    spyElementPrototype(HTMLElement, 'offsetParent', {
      get: () => document.body,
    });
  });

  beforeEach(() => {
    document.body.innerHTML = '';
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });
});
