import React from 'react'
import './Input.css'

interface InputProps {
  type?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
  label?: string
  error?: string
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  className = '',
  label,
  error
}) => {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name} className="input-label">{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`custom-input ${error ? 'input-error' : ''} ${className}`}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  )
}

export default Input
