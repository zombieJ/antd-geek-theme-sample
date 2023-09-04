import { genComponentStyleHook } from './styleUtil';

import { genStyle } from './checkboxStyle';

// ============================== Export ==============================
export default genComponentStyleHook(['Radio', 'techTheme'], (token) => {
  return [genStyle(token)];
});
