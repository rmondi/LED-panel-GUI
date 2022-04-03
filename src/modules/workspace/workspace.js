import React from 'react';
import { connect } from 'react-redux';
import './workspace.css';

import Panel from '../panel/panel.js';

class Workspace extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='workspace'>
      <Panel leds={this.props.leds}/>
    </div>
  }
};

const mapStateToProps = (state) => {
  return {leds : state.leds};
}

export default connect(mapStateToProps)(Workspace);