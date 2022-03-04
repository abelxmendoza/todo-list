import React from 'react'
import { FilterControl } from './FilterControl'
import { Task } from './Task'

export const TaskList = ({tasks}) => {

    console.log()
  
    return (
    <div className='task-list-wrapper'>
        
        <div className='task-list'> 
            
            {tasks.map((task) => {
               
               return <Task 
                text ={task.text} 
                key = {task.id}
                status = {task.status}
                />
            })}
            
        </div>



        <div className='task-items-info'> 
            <div className='items-left' >
                5 items left
            </div>

            <FilterControl />

            <div className='items-clear'>
                <span>Clear Completed</span>
            </div>

        </div>
        
    </div>
  )
}
