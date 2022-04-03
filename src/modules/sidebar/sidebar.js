import React from 'react';
import { connect } from 'react-redux';
import './sidebar.css';

import ColorPicker from '../color-picker/color-picker.js';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='sidebar'>
        { this.props.selection.length ? <ColorPicker selection={this.props.selection} /> : null }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selection : state.selection
  };
};

export default connect(mapStateToProps)(Sidebar);