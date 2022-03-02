import React from 'react'
import { FilterControl } from './FilterControl'
import { Task } from './Task'

export const TaskList = () => {
  
    return (
    <div className='task-list-wrapper'>
        
        <div className='task-list'> 
            <Task />
            <Task />
            <Task />

            

        </div>

        <div className='task-items-info'> 
            <div className='items-left' >
                5 items left
            </div>

            <FilterControl />

        </div>
        
    </div>
  )
}
