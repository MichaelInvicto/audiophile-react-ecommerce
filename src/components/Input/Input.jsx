import React from 'react'
import { ErrorMessage, useField } from 'formik'
import './input.css'

const Input = ({label, ...props}) => {
    
    const [field, meta] = useField(props)

  return (
    <div className={`billing-input-container ${ field.name == 'address' ? 'address' : '' }`}>
        <div className="billing-input-section">
            <div className="billing-input-name">
                <label htmlFor={field.name}>{label}</label>
                <ErrorMessage component="div" name={field.name} className='error' />
            </div>
            <input className={`${meta.touched && meta.error && 'is-invalid'} `} {...field} {...props} autoComplete='off' />
        </div>
    </div>
  )
}

export default Input