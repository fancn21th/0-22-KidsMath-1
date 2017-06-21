import React from 'react'

const Yuan = ({number}) => (
  <svg width='100' height='100'>
    <circle cx='50' cy='50' r='40' stroke='green' stroke-width='4' fill='silver' />
    <text x='50%' y='50%' text-anchor='middle' stroke='black' stroke-width='2px' dy='8' dx='-8'>
      {number}元
    </text>
  </svg>
)

export default Yuan;
