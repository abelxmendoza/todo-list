import React , { useState } from 'react'
import { TaskList } from './TaskList'



export const TaskInput = ({tasks, setTasks}) => {
  

    const {input, setInput} = useState("")

    const handleChange = (e) => {

        console.log(e.target.value)
    
    }

    const handleForm = (e) => {

        e.preventDefault()

        const newTask = {

            id: tasks.length + 1,
            text: input,
            status: false
        }

        console.log([...tasks, newTask])

        setTasks([...tasks, newTask])
    
    }

    console.log(input)
  
    return (
        <div className='task-input'>
            <div className='check'>
                <div className='check-mark'>
                    {/*insert image here*/}
                </div>

            </div>

     

        <div className='new-todo-input'>
          <form onSubmit = {handleForm}>
            <input onChange = {handleChange} id = 'todo-input' type="text" placeholder='Create a new todo' />
          </form>
        </div>
      </div>
  )

}

