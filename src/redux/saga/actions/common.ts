import {createRoutine,promisifyRoutine} from 'redux-saga-routines'
import extendRoutine from '../extendRoutine'
import NAME_SPACE from '../../../constants/name-spce/index'
export const setRetryTip=createRoutine(`${NAME_SPACE.COMMON}`)
