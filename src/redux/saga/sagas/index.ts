// import {all,fork} from 'redux-saga/effects'
// //  import user from './user'
// const rootSaga = function*(){
//     yield all(effects : [])
// }
// export default rootSaga;
import { all, fork } from 'redux-saga/effects';
import user from './user/user'
// import user from './user';

const rootSaga = function* () {
  yield all([
    fork(user())
  ])
}

export default rootSaga;