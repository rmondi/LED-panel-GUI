import React from 'react';
import './app.css';

import Workspace from '../workspace/workspace.js';
import Sidebar from '../sidebar/sidebar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <React.Fragment>
      <Workspace />
      <Sidebar />
    </React.Fragment>;
  }
}

export default App;