import { all, takeEvery, call, put, takeLatest } from 'redux-saga/effects'
import { fecthUsersFailure, fecthUsersSuccess } from './slice'

import axios from 'axios'

//API USERS: https://jsonplaceholder.typicode.com/users/

function* fetchUsers(){
  try{
    const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
    yield put(fecthUsersSuccess(response.data))

  }catch(error){
    yield put(fecthUsersFailure(error.massage))

  }
}

export default all([
    takeLatest("user/fetchUsers", fetchUsers)
])
    
