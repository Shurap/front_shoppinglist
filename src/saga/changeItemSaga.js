import { takeEvery, put } from 'redux-saga/effects'
import { CHANGE_ITEM_FOR_SAGA } from '../redux/constants'
import { postToServer } from '../utils/apiServer'
import { addListsToStore } from '../redux/actions/actionList'
import { messageOn } from '../redux/actions/actionApp'

function* doChangeItemForSaga({ data }) {
  try {

    const post = yield postToServer('/lists/item/change', data)
    yield put(messageOn(post.message))
    if (post.lists) yield put(addListsToStore(post.lists))
    // console.log(post)

  } catch (error) {
    yield put(messageOn('saga change item error'))
  }
}

export function* changeItemSaga() {
  yield takeEvery(CHANGE_ITEM_FOR_SAGA, doChangeItemForSaga);
}