import * as ACTIONS from './actions-type.js';

const leds = [];

for (let led = 1; led <= 256; led++) {
  leds.push('189,195,199');
}

const stateInit = {
  leds : leds,
  selection : []
}

const reducer = (state = stateInit, action) => {
  let newState = {};
  let selection;

  switch(action.type) {
    case ACTIONS.EDIT_LEDS:
      let leds = state.leds;
    
      action.leds.forEach(led => {
        leds[led] = action.color;
      });
    
      leds = leds.map(elem => {return elem});
    
      selection = [];
    
      newState = Object.assign({}, state, {leds : leds, selection : selection});

      break;
    case ACTIONS.SELECT_LED :
      selection = state.selection;
      selection.push(action.led);
    
      selection = selection.map(elem => {return elem});
      
      newState = Object.assign({}, state, {selection: selection});

      break;
    case ACTIONS.UNSELECT_LED :
      selection = state.selection;

      selection.forEach((led, index) => {
        if (led === action.led) selection.splice(index, 1)
      });
    
      selection = selection.map(elem => {return elem});
      
      newState = Object.assign({}, state, {selection: selection});

      break;
    default :
      newState = state;
  }

  return newState;
};

export default reducer;