import { connect } from 'react-redux'
import {
  deleteToDo,
  completeToDo,
  getTaskThunk
} from '../../store/slices/toDoSlice'
import styles from './ToDoList.module.sass'
import classNames from 'classnames'
import { useEffect } from 'react'

function ToDoListItem ({
  toDos,
  isFetching,
  error,
  deleteToDoById,
  completeToDoById,
  getTasks
}) {
  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>Error!!!</div>}
      {!isFetching && !error && (
        <div className={styles.container}>
          <ul className={styles.toDoList}>
            {toDos.map(t => {
              const completeToDoStyle = classNames({
                [styles.toDoComplete]: t.completed
              })

              return (
                <li key={t.id} className={styles.toDo}>
                  <input
                    type='checkbox'
                    checked={t.completed}
                    onChange={() => {
                      completeToDoById(t.id, !t.completed)
                    }}
                  ></input>
                  <span className={completeToDoStyle}>{t.title}</span>
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
      )}
    </>
  )
}

const mapStateToProps = ({ toDoList }) => toDoList

const mapDispatchToProps = dispatch => ({
  deleteToDoById: id => dispatch(deleteToDo(id)),
  completeToDoById: (id, completed) =>
    dispatch(completeToDo({ id, completed })),
  getTasks: () => dispatch(getTaskThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem)
