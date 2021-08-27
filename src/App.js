import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>TESTE</div>
      {/* <Reset /> */}
      {/* <Home /> */}
    </ThemeProvider>
  );
}

export default App;
