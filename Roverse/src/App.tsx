
import './App.css'
import { Layout } from './components/layout/Layout'
import { AppState } from './store/AppState'
// import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';

import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>

      <AppState>
        <Layout />
      </AppState>

    </>
  )
}

export default App
