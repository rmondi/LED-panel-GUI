import React from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions.js';
import './color-picker.css';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  changeColor = () => {
    this.props.edit_leds(this.props.selection, '241,196,15');
  }

  render() {
    return <button className='color-picker' onClick={this.changeColor}>Changer la couleur</button>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit_leds : (leds, color) => {
      dispatch(ACTIONS.edit_leds(leds, color))
    }
  }
}

export default connect(null, mapDispatchToProps)(ColorPicker);