import {createRoutine,promisifyRoutine} from 'redux-saga-routines'
import NAME_SPACE from '../../../constants/index'
import extendRoutine from '../extendRoutine'
export const loginAction=extendRoutine(
    createRoutine(`${NAME_SPACE.USER}`),
    [
        {
            type:'LOG_OUT',
            action:'logOut',
        }
    ]
)
const loginActionPromise=promisifyRoutine(loginAction)