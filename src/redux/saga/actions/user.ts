import {createRoutine,promisifyRoutine} from 'redux-saga-routines'
import NAME_SPACE from '../../../constants/name-spce'
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
export const loginActionPromise = promisifyRoutine( loginAction );
