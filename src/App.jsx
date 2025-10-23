import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import {UserList} from './components/UserList'

function App() {

  return (
    <>
      <Provider store={store}>
        <UserList />
      </Provider>
    </>
  )
}

export default App
