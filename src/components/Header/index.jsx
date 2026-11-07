import ToDoForm from '../ToDoForm'
import styles from './Header.module.sass'

function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>TO DO</h1>
        <ToDoForm />
      </div>
    </header>
  )
}

export default Header
