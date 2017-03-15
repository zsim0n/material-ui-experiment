## HowTo Material-ui@next theming

My experiences so far how to do theming in the new material-ui@next

Everything starts with an index.js

```
// index.js
import React from 'react';
import { render } from 'react-dom';

import App from './App';

const rootEl = document.querySelector('#root');

render(
  <App />,
  rootEl,
);

```

Material UI using [JSS]() with [JSS-Theme-Reactor](https://www.npmjs.com/package/jss-theme-reactor)

JSS-Theme-Reactor requires a theme object that goes into a styleManager that than can be referenced 
from the different styleSheets as `theme`.

Material-ui adds an extra layer on top of this  with some helper objects / functions. this is the MuiThemeProvider component.

As you can see at App.js there are some plumbing before theme can work.
Than you get theme and styleManager through context

_It is unclear yet if you have to put all your components with styleSheets into the
setSheetOrder array._

_I've tried to put everything around Site Layout into the <App> but somehow MuiThemeProvider likes this way.
So I have a separate <Site> for the rest.


```
// App.js
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


_I've tried to put everything around Site Layout into the <App> but somehow MuiThemeProvider likes this way.
So I have a separate <Site> for the rest.
```
//Site.js

import React, { Component } from 'react';
import customPropTypes from 'material-ui/utils/customPropTypes';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/menu';

import Layout from 'material-ui/Layout';

import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';

import {List, ListItem, ListItemText, ListItemIcon, ListSubheader,} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

import styleSheet from './Site.jss';

class Site extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
    theme: customPropTypes.muiRequired,
  };
  state = {
    drawerOpen: false,
    collapseIn: true,
    listitems : ['Item 1',"Item 2","Item 2"],
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  handleCollapse = () => {
    this.setState({ collapseIn: !this.state.collapseIn });
  }

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <Router>
      <div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <IconButton contrast onClick={this.handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <AppDrawer handleDrawerClose={this.handleDrawerClose}/>
        <AppContent />
      </div>
      </Router>
    );
  }
}
export default Site;


const AppDrawer = ({onCloseRequest, onCollapse},context) => {
  const classes = this.context.styleManager.render(styleSheet);
  let drawerDocked = false;

  const TeamItems = this.state.teams.map((team) =>
    <ListItem key={team.toString()} className={classes.listitem} button dense onClick={this.handleDrawerClose}>
        <Link to={`/teams/${team}`}><ListItemText primary={team} /></Link>
    </ListItem>
  );
  return (
    <Drawer
      className={classes.drawer}
      paperClassName={classes.drawerPaper}
      docked={drawerDocked}
      onRequestClose={this.handleDrawerClose}
      open={drawerDocked || this.state.drawerOpen}
    >
      <Toolbar>
        <Text type="title">Experim.ent</Text>
        <Divider absolute />
      </Toolbar>
      <List>
        <ListItem button onClick={this.handleCollapse}>
          <ListItemText primary="My Teams" />
        </ListItem>
        <Collapse in={this.state.collapseIn} transitionDuration="auto" unmountOnExit>
          {TeamItems}
        </Collapse>
      </List>
    </Drawer>

  );
};
