// import { rootCertificates } from "tls"
import thunkReducer from './thunk/reducers'
import sagaReducer from './saga/reducers'

//此文件只接受两个reducer 1sagaReducer 2thunkReducer
import {combineReducers} from 'redux'
const  rootReducer=combineReducers({
    ... sagaReducer,... thunkReducer
}
)
export default rootReducer
