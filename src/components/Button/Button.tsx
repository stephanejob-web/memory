import React from 'react'
import './Button.css'

interface ButtonProps {
  text: string
  onClick: () => void
  className?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = '', disabled = false }) => {
  return (
    <button 
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
