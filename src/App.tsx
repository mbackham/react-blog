import React from 'react';
import { Button } from 'antd'
import { setRetryTip } from './redux/saga/actions/common'
import {  useSelector,useDispatch } from 'react-redux'
import {loginAction,loginActionPromise} from './redux/saga/actions/user'
import useActions from './hooks/userActions'
import {SET_MENU} from './redux/thunk/actions/menu'
function App() {
  const { retryTip } = useSelector((state: IState) => state.common)
  const actions=useActions({setRetryTip,loginAction,loginActionPromise})

  const dispatch = useDispatch()
  const handleTestReduxClick = () => {
    //  actions.setRetryTip()
dispatch({
  type:SET_MENU,
  payload:{
    a:1,
    b:2
  }
})
      }
  console.log('retryTip', retryTip)
  return (
    <div className="App">
      <Button type='primary' onClick={handleTestReduxClick}>我就是app</Button>
    </div>
  );
}

export default App;
