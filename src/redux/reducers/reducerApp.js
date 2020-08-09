import {
  MESSAGE_ON,
  MESSAGE_OFF,
  ADD_PAGETITLE_TO_STORE
} from '../constants';

const initialState = {
  message: '',
  visibleModal: false,
  pageTitle: 'Login',
};

function app(state = initialState, action) {
  switch (action.type) {

    case MESSAGE_ON:
      return { ...state, message: action.data, visibleModal: true }

    case MESSAGE_OFF:
      return { ...state, visibleModal: false }

    case ADD_PAGETITLE_TO_STORE:
      return { ...state, pageTitle: action.data }

    default:
      return state;
  }
}

export default app;