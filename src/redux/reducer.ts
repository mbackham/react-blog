import { rootCertificates } from "tls"

//此文件只接受两个reducer 1sagaReducer 2thunkReducer
import {combineReducers} from 'redux'
import sagaReducer from './saga/reducers'
const  rootReducer=combineReducers(reducers:{
...sagaReducer,
})
export default rootReducer