import {createRoutine,promisifyRoutine} from 'redux-saga-routines'
import extendRoutine from '../extendRoutine'
import NAME_SPACE from '../../../constants/index'
export const setRetryTip=createRoutine(typePrefix:`${NAME_SPACE.COMMON}`)
 