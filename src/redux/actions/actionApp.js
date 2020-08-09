import {
  MESSAGE_ON,
  MESSAGE_OFF,
  ADD_PAGETITLE_TO_STORE
} from '../constants';

export function messageOn(data) {
  return {
    type: MESSAGE_ON,
    data,
  }
}

export function messageOff() {
  return {
    type: MESSAGE_OFF,
  }
}

export function addPageTitleToStore(data) {
  return {
    type: ADD_PAGETITLE_TO_STORE,
    data,
  }
}
