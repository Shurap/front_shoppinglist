import {
  DO_LOG_IN_FOR_SAGA
} from '../constants';

export function doLogInForSaga(form, navigation) {
  return {
    type: DO_LOG_IN_FOR_SAGA,
    form,
    navigation
  }
}