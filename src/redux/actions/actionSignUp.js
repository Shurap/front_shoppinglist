import {
  SIGN_UP_FOR_SAGA
} from '../constants';

export function signUpForSaga(data) {
  return {
    type: SIGN_UP_FOR_SAGA,
    data,
  }
}