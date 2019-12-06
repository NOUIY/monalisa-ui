/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import React from 'react';
import ThemeContext from './ThemeContext';

const StyleProvider = ({
  style,
  children,
}) => (
    <ThemeContext.Provider value={style}>
      {children}
    </ThemeContext.Provider>
  );

export default StyleProvider;