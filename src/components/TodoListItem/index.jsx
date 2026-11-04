import { connect } from 'react-redux'
import { deleteToDo } from '../../store/slices/toDoSlice'

function ToDoListItem ({ toDo, deleteToDoById }) {
  return (
    <ul>
      {toDo.map(t => (
        <li key={t.id}>
          {t.task}
          <button onClick={() => deleteToDoById(t.id)}>Del</button>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ toDoList }) => toDoList

const mapDispatchToProps = dispatch => ({
  deleteToDoById: id => dispatch(deleteToDo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem)
