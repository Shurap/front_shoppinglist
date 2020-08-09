import { takeEvery, put } from 'redux-saga/effects'
import { DO_LOG_IN_FOR_SAGA } from '../redux/constants'
import { addUserToStore } from '../redux/actions/actionUser'
import { addListsToStore } from '../redux/actions/actionList'
import { messageOn } from '../redux/actions/actionApp'
import { postToServerWithoutToken } from '../utils/apiServer'
import AsyncStorage from '@react-native-community/async-storage'


function* doLogInForSaga({ form, navigation }) {
  try {

    const post = yield postToServerWithoutToken('/auth/login', form)

    // yield AsyncStorage.setItem('userInfo', JSON.stringify({
    //   userId: post.userId, token: post.token
    // }))

    yield AsyncStorage.setItem('token', post.token)

    yield put(addUserToStore({ userId: post.userId, nick: post.nick }));

    if (post.lists) {
      yield put(addListsToStore(post.lists))
      yield navigation.navigate('Lists')
    } else {
      yield put(addListsToStore([]))
    }

    yield put(messageOn(post.message))

  } catch (error) {
    yield put(messageOn('saga login error'))

  }
}

export function* logInSaga() {
  yield takeEvery(DO_LOG_IN_FOR_SAGA, doLogInForSaga);
}