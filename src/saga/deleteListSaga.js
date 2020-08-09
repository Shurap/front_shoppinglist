import { takeEvery, put } from 'redux-saga/effects'
import { DELETE_LIST_FOR_SAGA } from '../redux/constants'
import { postToServer } from '../utils/apiServer'
import { addListsToStore } from '../redux/actions/actionList'
import { messageOn } from '../redux/actions/actionApp'

function* doDeleteListForSaga({ data }) {
  try {

    const post = yield postToServer('/lists/delete', data)

    yield put(messageOn(post.message))
    // console.log(post.message)
    if (post.lists) yield put(addListsToStore(post.lists))

  } catch (error) {
    yield put(messageOn('saga delete list error'))
    // console.log('saga delete list error')
  }
}

export function* deleteListSaga() {
  yield takeEvery(DELETE_LIST_FOR_SAGA, doDeleteListForSaga);
}