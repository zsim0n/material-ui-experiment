// @flow weak

import React, {Component} from 'react';
import customPropTypes from 'material-ui/utils/customPropTypes';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/menu';
import Layout from 'material-ui/Layout';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Text from 'material-ui/Text';

import styleSheet from './Site.jss';

class Site extends Component {
  static contextTypes = {
    styleManager: customPropTypes.muiRequired,
    theme: customPropTypes.muiRequired
  };

  state = {
    drawerOpen: false
  };

  handleDrawerClose = () => {
    this.setState({drawerOpen: false});
  };

  handleDrawerToggle = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);
    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <IconButton contrast onClick={this.handleDrawerToggle}>
              <MenuIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          paperClassName={classes.drawerPaper}
          docked={false}
          onRequestClose={this.handleDrawerClose}
          open={this.state.drawerOpen}>
          <Toolbar>
            <Text type="title">Experiment</Text>
            <Divider absolute/>
          </Toolbar>
        </Drawer>
        <Layout container>
          <Layout item xs={12}>
            <Paper className={classes.content}>
              Hello World!
            </Paper>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Site;
