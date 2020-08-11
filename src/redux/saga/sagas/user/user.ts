import { call, put, takeEvery, delay, take ,cancel} from 'redux-saga/effects'
import { loginAction } from '../../actions/user'
// import LocalStore from '../../../../utils/localStorage'

function* authorize(action: ActionParams<ILogin>) {
    try {
        const res =new Promise((res,rej)=>{
            setTimeout(() => {
                res('什么情况')
            }, 1000);
        })

        console.log('请求进来了')
        yield delay(1000)
        // yield call(()=>{
        //     LocalStore.set('')
        // })
        let result
        res.then((res)=>{
            console.log(res)
                 result=res as string
        })
        yield put(loginAction.success(res))
    } catch (error) {
        yield put(loginAction.failure())
    }
}
export default () => (function* () {

    const task = yield takeEvery(loginAction.TRIGGER, authorize)
    const action = yield take([loginAction.logOut,loginAction.FAILURE])
    if (action.type===loginAction.LOG_OUT) yield cancel(task)

})