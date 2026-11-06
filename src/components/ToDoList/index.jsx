import { connect } from 'formik'
import ToDoForm from '../ToDoForm'
import ToDoListItem from '../TodoListItem'

function ToDoList () {
  return (
    <div>
      <ToDoForm />
      <ToDoListItem />
    </div>
  )
}



export default ToDoList
