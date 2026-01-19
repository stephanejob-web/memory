import React from 'react'
import './Card.css'

interface CardProps {
  value: string
  isFlipped: boolean
  isMatched: boolean
  onClick: () => void
}

const Card: React.FC<CardProps> = ({ value, isFlipped, isMatched, onClick }) => {
  return (
    <div className="card-container" onClick={onClick}>
      <div className={`card ${isFlipped || isMatched ? 'flipped' : ''}`}>
        <div className="card-face card-front">
          <span>?</span>
        </div>
        <div className="card-face card-back">
          <span>{value}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
