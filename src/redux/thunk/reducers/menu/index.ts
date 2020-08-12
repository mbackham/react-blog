import { Action } from "redux"

import {SET_MENU,ASYNC_SET_MENU} from '../../actions/menu'
const initialStateSetter={

}
export default  function(state:{}=initialStateSetter,action:ActionParams){
    switch(action.type){
        case SET_MENU:{
            console.log('请求收到了',action.payload)
            return {
                ...state,
            }
        }
        case  ASYNC_SET_MENU:{
            console.log('收到异步请求',action)
            return{
                ...state
            }
        }

        default:
    return state
    }
}
