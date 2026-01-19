import React from 'react'
import './Title.css'

interface TitleProps {
  text: string
  className?: string
}

const Title: React.FC<TitleProps> = ({ text, className = '' }) => {
  return (
    <h1 className={`title ${className}`}>
      {text}
    </h1>
  )
}

export default Title
