import { SagaIterator } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga():SagaIterator {
  yield delay(5000)
  yield console.log('pasol v pizdu')
  console.log('Hello Sagas!')
}

function* incrementAsync() {
  yield delay(1000)
  yield console.log('pasol v pizdu')
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}