import React from 'react'

export const required = value => (value ? undefined : 'Required')
export const email = value => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'Invalid email address')

export const renderField =
  ({
     input,
     type,
     placeholder,
     className,
     id,
     meta: {touched, error, valid}
   }) => (
    <div>
      <input
        {...input}
        placeholder={placeholder}
        className={(touched && !valid) ? `${className} is-invalid` : `${className}`}
        type={type}
        id={id}
      />
      {
        touched && (error && <div className="invalid-feedback"> {error} </div>)
      }
    </div>
  )