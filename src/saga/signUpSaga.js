import { takeEvery, put } from 'redux-saga/effects'
import { SIGN_UP_FOR_SAGA } from '../redux/constants'
import { postToServerWithoutToken } from '../utils/apiServer'
import { messageOn } from '../redux/actions/actionApp'

function* signUpForSaga({ data }) {
  try {
    const post = yield postToServerWithoutToken('/auth/register', data)

    yield put(messageOn(post.message))
    
  } catch (error) {
    yield put(messageOn('saga sign up error'))
  }
}

export function* signUpSaga() {
  yield takeEvery(SIGN_UP_FOR_SAGA, signUpForSaga);
}