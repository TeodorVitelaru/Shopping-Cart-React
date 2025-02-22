export function Header(props) {
    const { todos } = props
    const todoLength = todos.length

    const todoOpen = todos.filter(val => !val.complete)
    const todoOpenLength = todoOpen.length

    const isTasksPlural = todoOpen.length != 1
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'

    return(
        <header>
            <h1 className="text-gradient">You have {todoOpenLength} open {taskOrTasks}.</h1>
        </header>
    )
}