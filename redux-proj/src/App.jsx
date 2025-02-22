import './App.css'
import AddNewBlog from './blog-app/add-new-blog'
import BlogList from './blog-app/blog-list'
import CounterButton from './counter-exemple/counter-button'
import CounterValue from './counter-exemple/counter-value'

function App() {

  return (
    <div>
        <h1>BlogList App</h1>
        <AddNewBlog/>
        <BlogList/>
        {/*<CounterButton/>
        <CounterValue/>*/}
    </div>
  )
}

export default App
