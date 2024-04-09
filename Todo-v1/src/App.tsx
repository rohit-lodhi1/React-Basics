
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppName } from './TodoApp/components/AppName'
import AddTodo from './TodoApp/components/AddTodo'
import TodoList from './TodoApp/components/TodoList'
import './App.css'
import TodoApp from './TodoApp/components/TodoApp'
import { FragmentsApp } from './Fragments/Fragments'
import TodoAppV2 from './TodoApp-v2/TodoApp'
import Calculater from './Calculater/Calculater'
function App() {


  return (
    <>

      {/* <TodoApp></TodoApp> */}
      {/* <FragmentsApp></FragmentsApp> */}
      <TodoAppV2></TodoAppV2>

      {/* <Calculater></Calculater> */}
    </>
  )
}

export default App
