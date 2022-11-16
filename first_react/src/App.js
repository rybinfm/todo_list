///reacting to events with onClick and using a sate this one is to print the input next to it//
import './App.css';
import { useState } from 'react';
import { Task } from "./Task";

function App() {
  //states//
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  //state functions
  const handleChange = (event) => { 
    setNewTask(event.target.value)
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id +1,
      taskName: newTask,
      completed: false,
    };
    //const newTodoList = [...todoList, newTask];//how to add to a state list cus we cant change them directly
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) =>{
      if (task.id===id){
        return false;
      }else{
        return true;
      }
    })
    setTodoList(newTodoList);
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) =>{
        if (task.id === id){
          return{...task, completed: true };
        }else{
          return task;
        }
      })
    )
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="list">
        {todoList.map((task)=>{
          return <Task 
            taskName={task.taskName} 
            id={task.id} 
            deleteTask ={deleteTask}
            complete = {task.completed}
            completeTask = {completeTask}/>
        })}
      </div>
    </div>
  );

}

export default App;
