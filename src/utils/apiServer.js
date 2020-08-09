//TODO Try to use redux-persist instead of directly accessing locaStorage. 
//https://trello.com/c/WYWtNpjp/19-use-redux-persist-to-store-user-token

import Constants from "expo-constants"
import AsyncStorage from '@react-native-community/async-storage'

const { manifest } = Constants
// const uri = `http://${manifest.debuggerHost.split(':').shift()}:5000`


//TODO need to do something before deploy
const uri = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? `http://${manifest.debuggerHost.split(':').shift()}:5000`
  : `http://localhost:5000`


export const getFromServer = async (path) => {
  const token = await (AsyncStorage.getItem('token')) ? AsyncStorage.getItem('token') : null

  const response = await fetch(uri + path,
    {
      method: 'GET',
      body: null,
      headers: { Authorization: `Bearer ${token}` }
    })

  const result = await response.json()
  return result
}

export const postToServer = async (path, data) => {
  const token = (AsyncStorage.getItem('token')) ? await AsyncStorage.getItem('token') : null

  const response = await fetch(uri + path,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

  const result = await response.json()
  return result
}

export const postToServerWithoutToken = async (path, data) => {
  const response = await fetch(uri + path,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  const result = await response.json()
  return result
}