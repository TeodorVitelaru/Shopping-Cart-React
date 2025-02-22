
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList'
import { ToDoInput } from './components/ToDoInput'
import { Tabs } from './components/Tabs'

import { useState, useEffect } from 'react' 

function App() {
  

    const [todos, setTodos] = useState([
      { input: 'Hello! Add your first todo!', complete: true },
      { input: 'Get the groceries!', complete: false },
      { input: 'Learn how to web design', complete: false },
      { input: 'Say hi to gran gran', complete: true },
      
    ])
    const [selectedTab, setSelectedTab] = useState('Open')

    function handleAddTodo(newTodo){
        const newTodoList = [...todos, {input: newTodo, complete: false}]

        setTodos(newTodoList)
    }

    function handleCompleteTodo(index){
        let newTodoList = [...todos]
        let completedTodo = todos[index]
        completedTodo['complete'] = true;
        newTodoList[index] = completedTodo
        setTodos(newTodoList)
        handleSaveData(newTodoList)
    }

    function handleDeleteTodo(index){
        let newTodoList = todos.filter((val, valIndex) =>{
          return valIndex !==index
        })
        setTodos(newTodoList)
        handleSaveData(newTodoList)
    }

    function handleSaveData(currentTodos){
      localStorage.setItem('todo-app', JSON.stringify({ todos:currentTodos }))
    }

    useEffect(() => {
      const storedData = localStorage.getItem('todo-app');
      if (!storedData) return;
      let db = JSON.parse(storedData);
      setTodos(db.todos);
    }, []);
    

  return ( 
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} 
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}/>
      <ToDoList todos={todos}
                selectedTab={selectedTab}
                handleDeleteTodo={handleDeleteTodo}
                handleCompleteTodo={handleCompleteTodo}/>
      <ToDoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
