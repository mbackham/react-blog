import { call, put, takeEvery, delay } from 'redux-saga/effects'
import { loginAction } from '../../actions/user'
import LocalStore from '../../../../utils/localStorage'
function* authorize(action: ActionParams<ILogin>) {
    try {
        const res = setTimeout(() => ({
            username:'dmx',
            password:'abs'
        }), 1000);
        console.log('请求进来了')
        yield delay(1000)
        yield put(loginAction.success(res))
    } catch (error) {
        yield put(loginAction.failure())
    }
}
export default () => (function* () {
    yield takeEvery(loginAction.TRIGGER, authorize)
})