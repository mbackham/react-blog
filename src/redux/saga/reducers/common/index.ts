import {setRetryTip} from '../../actions/common'
const initialStateSetter ={
    retryTip:false
}
export default (state:{}=initialStateSetter,action:ActionParams)=>{
    switch(action.type){
        case setRetryTip.TRIGGER:{
            return{
                ...state,
                retryTip:true
            }
        }
    }
return state;
}