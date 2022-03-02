
import './App.css';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="App">
      <div className = "container"> 
        <div className='header'>
          <h1>TODO</h1>
          <img src = "/home/firefistabel/github/todo-list/public/images/icon-moon.svg"></img>
        </div>
       
       <TaskInput />

        {/*Make a task list */}
        <TaskList />
        
      
      </div>
    </div>
  );
}

export default App;
