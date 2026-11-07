import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { TO_DO_VALIDATION_SCHEMA } from '../../utils/validationSchema'
import { addToDo } from '../../store/slices/toDoSlice'
import styles from './ToDoForm.module.sass'

const initialValues = {
  task: ''
}

function ToDoForm ({ addNewToDo }) {
  const handleAddToDo = (values, formikBag) => {
    if (values.task.trim() !== '') {
      addNewToDo({ ...values, id: uuidv4(), isCompleted: false })
    }
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddToDo}
      validationSchema={TO_DO_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form className={styles.container}>
          <label className={styles.label}>
            <Field
              type='text'
              name='task'
              placeholder='Create todo'
              className={styles.input}
            />
            <ErrorMessage
              name='task'
              component='div'
              className={styles.error}
            />
          </label>
          <button className={styles.submit} type='submit'>
            +
          </button>
        </Form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = dispatch => ({
  addNewToDo: toDo => dispatch(addToDo(toDo))
})

export default connect(null, mapDispatchToProps)(ToDoForm)
