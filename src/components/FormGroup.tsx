import React, {} from 'react'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormGroup = ( { label, ...props }: FormGroup.Props ) => (
  <div className="form-group">
    <label>{label}</label>
    <input className="form-control" {...props} />
  </div>
)

declare namespace FormGroup {
  export interface Props extends InputProps {
    label: string
  }
}

export default FormGroup