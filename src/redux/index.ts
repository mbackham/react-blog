//1 reducer [initialState,enhancer]
import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga/sagas'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
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