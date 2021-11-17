import {useState, useRef, useEffect} from 'react'
import ToDoList from './ToDoList';
const {v4: uuidv4} = require('uuid');

function App() {

  const [todos, setTodoList]=useState([])
  const todoNameRef=useRef();
  const LOCALSTORAGEKEY = '1';
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY))
    if(storedTodos) setTodoList(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGEKEY,JSON.stringify(todos))
  }, [todos])

  function handleAddTodo(){
    const name= todoNameRef.current.value;
    todoNameRef.current.value='';
    console.log(name);
    if(name ==='')return
    console.log(name)
    let todo = {id:uuidv4(), name:name, completed: false}
    setTodoList(prevTodos => {
      return [...prevTodos, todo]})
  }  

  function clearTodos(){
    setTodoList([]);
    localStorage.clear();
  }

  return (
    <>
      <ToDoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button onClick={clearTodos}>Clear completed ToDos</button>
      <div>{todos.length} left to do</div>
    </>
  );
}

export default App;
