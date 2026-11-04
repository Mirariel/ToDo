import { connect } from 'react-redux'

function ToDoListItem ({ toDo }) {
  return (
    <ul>
      {toDo.map(t => (
        <li key={t.id}>
          {t.task}
          <button>Del</button>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = ({ toDoList }) => toDoList

export default connect(mapStateToProps)(ToDoListItem)
