import React from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions.js';
import './panel.css';

import Led from '../led/led';

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='panel'>
      {
        this.props.leds.map((color, index) => {
          return <Led key={index} index={index} color={color} selected={this.props.selection.includes(index) ? true : false} />
        })
      }
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    selection : state.selection
  };
};

export default connect(mapStateToProps)(Panel);