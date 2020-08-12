
import { Dispatch } from 'redux'
import {createDeflateRaw} from 'zlib'
import { ASYNC_SET_MENU } from '../actions/menu'
export   function getMenuData(){
    return async function (dispatch:Dispatch) {
       await setTimeout(()=>console.log('我是thunk的异步数据'),3000)
        dispatch({
            type:ASYNC_SET_MENU,
            payload:'我是异步请求的数据u'
        })
    }
}