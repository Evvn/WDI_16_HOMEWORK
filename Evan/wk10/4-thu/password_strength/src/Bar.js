import React from 'react'
import './Bar.css'

export default function Bar(props) {
  const barStyle = {
    width: props.width || '0%',
    backgroundColor: props.color || 'yellow'
  }

  let currentScore = props.score || 0

  return (
    <div className="bar-wrapper">
      <span className="score">{currentScore}/5</span>
      <div className="bar" style={barStyle}></div>
    </div>
  )
}
