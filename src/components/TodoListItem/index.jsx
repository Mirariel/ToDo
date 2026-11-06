import { connect } from 'react-redux'
import { deleteToDo, completeToDo } from '../../store/slices/toDoSlice'

function ToDoListItem ({ toDo, deleteToDoById, completeToDoById }) {
  return (
    <ul>
      {toDo.map(t => (
        <li key={t.id}>
          <input
            type='checkbox'
            checked={t.isCompleted}
            onChange={() => {
              completeToDoById(t.id, !t.isCompleted)
            }}
          ></input>
          {t.task}
          <button onClick={() => deleteToDoById(t.id)}>Del</button>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ toDoList }) => toDoList

const mapDispatchToProps = dispatch => ({
  deleteToDoById: id => dispatch(deleteToDo(id)),
  completeToDoById: (id, isCompleted) =>
    dispatch(completeToDo({ id, isCompleted }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem)
