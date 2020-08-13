import AxiosInstance ,{AxiosStatic,AxiosPromise} from 'axios'
import {message,notification} from 'antd'
import {setRetryTip} from '../redux/saga/actions/common'
import store from '../redux'
import LocalStore from '../utils/localStorage'
//参数类型声明
type requestFn=(url:string,params?:Object,data?:Object|null)=>AxiosPromise
class Http{
    private axios:AxiosStatic=AxiosInstance
    private retryDelay:number=1000
    private retry:number = Number(process.env.REACT_APP_RETRY)||4
    constructor(){
        const{axios}=this
        axios.defaults.timeout=5000
        axios.defaults.baseURL=process.env.REACT_APP_API_URL
        axios.defaults.headers={
            "Content-Type":"application/json;charset=UTF-8"
        }
        this.useInterceptResponse()
        this.useInterceptRequest()
        this.useInterceptResponse(){}
        this.useInterceptRequest(){}
        private fetchData(type:string,url:string,options?:Object,isComplex?:boolean){
            if(isComplex){
                return this.axios[type](url,null,options)
            }
            return this.axios[type](url,options)
        }
        public get:requestFn=(url,params:Object|undefined)=>{
            if(!params)return this.fetchData("get",url)
            const newParams=Object.assign(params,{[`dmx${new Date().getTime()}`]:1})
            return this.fetchData('get',url,{params:newParams})
        }
        public post:requestFn=(url,params:Object|undefined,data)=>{
            if(!params)return this.fetchData("get",url)
            const newParams=Object.assign(params,{[`dmx${new Date().getTime()}`]:1})
            return this.fetchData('get',url,{params:newParams})
        }
    }
}