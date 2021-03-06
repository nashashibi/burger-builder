import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const Layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
);

export default Layout;