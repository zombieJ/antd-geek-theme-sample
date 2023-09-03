import { genComponentStyleHook } from 'antd/es/theme/internal';

import { genStyle } from './checkboxStyle';

// ============================== Export ==============================
export default genComponentStyleHook(['Radio', 'techTheme'], (token) => {
  return [genStyle(token)];
});
