import React from 'react';
import { Button } from 'antd'
import { setRetryTip } from './redux/saga/actions/common'
import {  useSelector,useDispatch } from 'react-redux'
import {loginAction,loginActionPromise} from './redux/saga/actions/user'
// import useActions from './hooks/useActions'
function App() {
  const dispatch = useDispatch()
  const handleTestReduxClick = () => {
        dispatch({
          tyoe:'TRIGGER',
          payLoad:[]
        })
      }
  const { retryTip } = useSelector((state: IState) => state.common)
  console.log('retryTip', retryTip)
  // const actions=useActions({setRetryTip,loginAction})
  return (
    <div className="App">
      <Button type='primary' onClick={handleTestReduxClick}>我就是app</Button>
    </div>
  );
}

export default App;
