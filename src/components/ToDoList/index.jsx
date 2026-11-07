import { connect } from 'react-redux'
import { deleteToDo, completeToDo } from '../../store/slices/toDoSlice'
import styles from './ToDoList.module.sass'
import classNames from 'classnames'

function ToDoListItem ({ toDo, deleteToDoById, completeToDoById }) {
  return (
    <div className={styles.container}>
      <ul className={styles.toDoList}>
        {toDo.map(t => {
          const completeToDoStyle = classNames({
            [styles.toDoComplete]: t.isCompleted
          })

          return (
            <li key={t.id} className={styles.toDo}>
              <input
                type='checkbox'
                checked={t.isCompleted}
                onChange={() => {
                  completeToDoById(t.id, !t.isCompleted)
                }}
              ></input>
              <span className={completeToDoStyle}>{t.task}</span>
              <button
                className={styles.delBtn}
                onClick={() => deleteToDoById(t.id)}
              >
                X
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ toDoList }) => toDoList

const mapDispatchToProps = dispatch => ({
  deleteToDoById: id => dispatch(deleteToDo(id)),
  completeToDoById: (id, isCompleted) =>
    dispatch(completeToDo({ id, isCompleted }))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem)
