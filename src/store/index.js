import {createStore} from 'redux';

const INITIAL_STATE = {
  login: false,
};

function Store(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {...state, login: action.login};
    default:
      return {...state};
  }
}

export default createStore(Store);
