import AxiosInstance ,{AxiosStatic,AxiosPromise} from 'axios'
import {message,notification} from 'antd'
import {setRetryTip} from '../redux/saga/actions/common'
import store from '../redux'
import LocalStore from '../utils/localStorage'
//参数类型声明
type requestFn=(url:string,params?:Object,data?:Object|null)=>AxiosPromise
class Http{
    private axios:AxiosStatic=AxiosInstance
}