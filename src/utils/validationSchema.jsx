import * as yup from 'yup'

export const TO_DO_VALIDATION_SCHEMA = yup.object({
  task: yup
    .string()
    .trim()
    .min(5, 'Text must be at least 5 characters')
    .max(100, 'Text must be at most 100 characters')
    .required()
})
