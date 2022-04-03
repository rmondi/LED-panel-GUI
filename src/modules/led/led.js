import React from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions.js';
import './led.css';

class Led extends React.Component {
  constructor(props) {
    super(props);
  }

  select = () => {
    const { selected, index } = this.props;
    selected ? this.props.unselect_led(index) : this.props.select_led(index);
  }

  render() {
    return (
      <div className={this.props.selected ? 'led selected' : 'led'} onClick={this.select}>
        <div style={{backgroundColor:`rgb(${this.props.color})`}}></div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    select_led : (led) => {
      dispatch(ACTIONS.select_led(led))
    },
    unselect_led : (led) => {
      dispatch(ACTIONS.unselect_led(led));
    }
  }
}

export default connect(null, mapDispatchToProps)(Led);