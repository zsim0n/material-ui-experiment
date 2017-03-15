# Material-ui@next theming and boilerplate experiment

This is a non-production project to reveal some _magic_ behind the upcoming release of [material-ui](http://www.material-ui.com/#/)

## _Disclaimer_
_This is an unofficial repo. I've created it because I am trying to use material-ui in other projects. All the infromations are coming from my experiences playing with the code._

## Usage

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## JSS and JSS-Theme Reactor 

The [@next](https://github.com/callemall/material-ui/tree/next) version using [JSS](http://cssinjs.org) and [JSS-Theme-Reactor](https://www.npmjs.com/package/jss-theme-reactor). JSS-Theme-Reactor requires a `ThemeObject`. The `MuiThemeProvider` Component adds an extra abstraction layer that manages these things.  It can create the `theme` a `palette`. Both the `theme`and the `styleManager`are available via `context` in the whole application.

You can see an example how is this working in the [App.js](https://github.com/zsim0n/material-ui-experiment/blob/master/src/App.js)

The [Site.js](https://github.com/zsim0n/material-ui-experiment/blob/master/src/Site.js) contains a simple site skeleton with `<AppBar>` and `<Drawer>` with some `<Layout>` experiment. There is a separated [Site.jss.js](https://github.com/zsim0n/material-ui-experiment/blob/master/src/Site.jss.js) for the JSS styles.

## Questions so far

* What is the best practice for JSS? (inline? Separated files?)
* Is this `context` thing is the right thing to do? https://facebook.github.io/react/docs/context.html
  * This line in every component bugs me: `const classes = this.context.styleManager.render(styleSheet);`
* It is unclear  how to use the `setSheetOrder`?
* Is this the right way using the `<Layout>`?
* etc...

## Contribution

Thank you for taking the time to contribute! See [code of conduct](http://contributor-covenant.org) for contribution guidelines and details

## License

This project is licensed under the Apache 2.0 License - see the [License](https://opensource.org/licenses/Apache-2.0) for details
