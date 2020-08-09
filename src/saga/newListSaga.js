import { takeEvery, put } from 'redux-saga/effects'
import { ADD_NEW_LIST_FOR_SAGA } from '../redux/constants'
import { postToServer } from '../utils/apiServer'
import { addListsToStore } from '../redux/actions/actionList'
import { messageOn } from '../redux/actions/actionApp'

function* addNewListForSaga({ data }) {
  try {
    const post = yield postToServer('/lists/new', data)

    yield put(messageOn(post.message))
    if (post.lists) yield put(addListsToStore(post.lists))

  } catch (error) {
    yield put(messageOn('saga add new list error'))
  }
}

export function* newListSaga() {
  yield takeEvery(ADD_NEW_LIST_FOR_SAGA, addNewListForSaga);
}