// @flow weak

import React from 'react';
import MuiThemeProvider, { MUI_SHEET_ORDER } from 'material-ui/styles/MuiThemeProvider';
import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import { blue, pink } from 'material-ui/styles/colors';

import Site from './Site';

function App(props) {

  const palette = createPalette({
    primary: blue,
    accent: pink,
  });

  const { styleManager, theme } = MuiThemeProvider.createDefaultContext({
    theme: createMuiTheme({ palette }),
  });

  styleManager.setSheetOrder(MUI_SHEET_ORDER.concat([

  ]));

  return (
    <MuiThemeProvider theme={theme} styleManager={styleManager}>
      <Site/>
    </MuiThemeProvider>
  );
}

export default App;
