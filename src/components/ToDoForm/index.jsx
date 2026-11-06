import { ErrorMessage, Field, Form, Formik } from 'formik'
import { TO_DO_VALIDATION_SCHEMA } from '../../utils/validationSchema'
import { addToDo } from '../../store/slices/toDoSlice'
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const initialValues = {
  task: ''
}

function ToDoForm ({ addNewToDo }) {
  const handleAddToDo = (values, formikBag) => {
    addNewToDo({ ...values, id: uuidv4(), isCompleted: false })
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddToDo}
      validationSchema={TO_DO_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form>
          <label>
            <Field type='text' name='task' />
            <ErrorMessage name='task' component='div' />
          </label>
          <button type='submit'>Add to do</button>
        </Form>
      )}
    </Formik>
  )
}

const mapDispatchToProps = dispatch => ({
  addNewToDo: toDo => dispatch(addToDo(toDo))
})

export default connect(null, mapDispatchToProps)(ToDoForm)
