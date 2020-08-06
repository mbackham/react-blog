import { loginAction } from '../../actions/user'
const initialStateSetter = {
    isLogin: false
}
export default function (state = initialStateSetter, action: ActionParams) {
    switch (action.type) {
        case loginAction.SUCCESS: {
            console.log('登陆成功')
            return {
                ...state,
                isLogin: true
            }
        }
        case loginAction.FAILURE:{
            console.log('登陆出错')
        }
        default:
            return state;
    }

}