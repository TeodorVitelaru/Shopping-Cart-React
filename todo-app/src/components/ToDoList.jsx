import { ToDoCard } from "./ToDoCard";

export function ToDoList(props){
    const {todos, selectedTab} = props
    const todosWithIndex = todos.map((todo, index) => ({
        ...todo,
        originalIndex: index
    }))
    const filterTodoList = selectedTab === 'All' ?
        todosWithIndex : selectedTab === 'Completed' ? todosWithIndex.filter(val => val.complete) :
        todosWithIndex.filter(val => !val.complete)

    return(
        <>
            {filterTodoList.map((todo, todoIndex) =>{

                return(
                    <ToDoCard 
                    key={todoIndex}
                    todoIndex ={todo.originalIndex}
                    {...props}
                    todo={todo}/>
                )
            })}
        </>
    )
}