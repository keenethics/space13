import { Field } from 'react-final-form'
import BaseFieldLayout from './BaseFieldLayout'

export default function BaseFieldHOC(Component) {
  return function(props) {
    return (
      <Field
        component={BaseFieldLayout}
        inputComponent={Component}
        {...props}
      />
    )
  }
}
