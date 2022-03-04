import React from 'react'

export const Task = ({text}) => {
  return (
    <div className='task-item'>
        
        <div className='check'>
            <div className='check-mark'>

            </div>

        </div>

        <div className='task-text'> 
            <p> {text} </p>
        </div>
    
    </div>
  )
}
