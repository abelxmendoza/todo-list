
import './App.css';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import { useState } from 'react'





const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];

function App() {



/*
Todos for Todo AppPart 1:
- Finish up minor css
- Create a data array of objects (todos)
- Create a state that holds that tasks data
- Pass that data to Tasklist and map through to create Task component for each task
- Destrcture props and make Task dynamicPart 2:
- Pass tasks and setTasks state to TaskInput
- Create input state
- Set up handleChange function to update input state
- set value of input to input
- Create handleForm function to create new Task
- Create an new task object and how would you add that to the array of tasks?
*/



  const [tasks, setTasks] = useState(data); //let tasks = [] empty array

  console.log(tasks[0].text)

  return (
    <div className="App">
      <div className = "container"> 
        <div className='header'>
          <h1>TODO</h1>
          <img src = "/home/firefistabel/github/todo-list/public/images/icon-moon.svg"></img>
        </div>
       
       <TaskInput setTasks = {setTasks} tasks = {tasks}/>

        {/*Make a task list */}
        <TaskList tasks = {tasks}  />
        
      
      </div>
    </div>
  );
}

export default App;
