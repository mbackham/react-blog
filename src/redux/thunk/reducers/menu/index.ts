import { Action } from "redux"

import {SET_MENU} from '../../actions/menu'
const initialStateSetter={

}
export deault function(state:{}=initialStateSetter,action:ActionParams){
    switch(action.type){
        case SET_MENU:{
            console.log('请求收到了')
            return {
                ...state,
            }
        }
        default:
    return state
    }
}
