//1 reducer [initialState,enhancer]
import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga/sagas'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
//thunk 原理 实际thunk中间件会判断 如果传进来的action是个函数，就会执行这个函数，并且向下传递被包装过后的dispatch
//如果不是一个函数，就直接传递最初dispatch
const sagaMiddleware=createSagaMiddleware()
 const composeEnhancer=
(window as any).__REDUX_DEVTOOLS_EXTENSION_COMOSE__
?(window as any).__REDUX_DEVTOOLS_EXTENSION_COMOSE__({})
:compose;
const store = createStore(rootReducer,composeEnhancer(
    applyMiddleware(sagaMiddleware,thunk,logger)
))
sagaMiddleware.run(rootSaga)
export default store