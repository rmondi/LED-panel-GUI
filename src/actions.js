import * as ACTIONS from './actions-type.js';

export const edit_leds = (leds, color) => {
  return {
    type : ACTIONS.EDIT_LEDS,
    leds : leds,
    color : color
  }
}

export const select_led = (led) => {
  return {
    type : ACTIONS.SELECT_LED,
    led : led
  }
}

export const unselect_led = (led) => {
  return {
    type : ACTIONS.UNSELECT_LED,
    led : led
  }
}