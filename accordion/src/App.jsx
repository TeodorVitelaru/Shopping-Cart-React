import { useEffect, useState } from "react"
import classes from './styles.module.css'
import { TodoItem } from "./components/todo-item"
import { TodoDetails } from "./components/todo-item/todo-details"
import { Skeleton } from "@mui/material"



function App() {
  const [loading, setLoading] = useState(false)
  const [todoList, setTodoList] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)
  const [todoDetails, setTodoDetails] = useState(null)
  const [openDialog, setOpenDialog] = useState(false)

  async function fetchListOfTodos(){
    try{
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos')
      const result = await apiResponse.json();

      console.log(result)

      if(result?.todos && result?.todos?.length > 0){
        setTodoList(result.todos)
        setLoading(false)
        setErrorMsg('')
      } else{
        setTodoList([])
        setLoading(false)
        setErrorMsg('')
      }

    } catch(err){
      console.log(e)
      setErrorMsg('Somer error occured')
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
      console.log(getCurrentTodoId)
      try{
        const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
        const result = await apiResponse.json()

        if(result){
          setTodoDetails(result)
          setOpenDialog(true)
        } else{
          setTodoDetails(null)
          setOpenDialog(false)
        }

      } catch(err){
        console.log(err)
      }
  }

  useEffect(()=>{
    fetchListOfTodos()
  }, [])
  if(loading) return <Skeleton variant="rectangular" width={650} height={650}/>

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo Appp using matrial UI</h1>
      <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length > 0 ?
          todoList.map(todoItem =>
          <TodoItem todo={todoItem} 
          fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}/>) : null
        }
      </div>
      <TodoDetails openDialog={openDialog}
      todoDetails={todoDetails}
      setOpenDialog={setOpenDialog}
      setTodoDetails={setTodoDetails}/>
    </div>
  )
}

export default App
