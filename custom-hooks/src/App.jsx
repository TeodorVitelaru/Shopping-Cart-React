import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom"
import ReciepeList from "./recipes"
import RecipeDetailsPage from "./recipe-details"
import NotFoundPage from "./pages/not-found"
import Layout from "./components/layout"
import CommentsList from "./comments"
import ReactHookFormExamplePage from "./pages/custom--hook-form-example"
import Hooks from "./pages/hooks"
import ReactQueryDemo from "./react-query-demo"


function CustomRoutes(){
  const element = useRoutes([
    {
      path: '/home', element: <Layout/>,
      children: [
        {
          path: 'recipe-list', element: <ReciepeList/>},
          {path: 'comments-list', element: <CommentsList/>
        }
      ]
    },
    {
      path: '*', element: <NotFoundPage/>
    },
    {
      path: "react-hook-form", element: <ReactHookFormExamplePage/>
    },
    {
      path: '/hooks', element: <Hooks/>
    },
    {
      path: '/react-query-demo', element:<ReactQueryDemo/>
    }
  ])

  return element
}


function App() {

  const navigate = useNavigate()

  return (
    <div>
      {/* <h1>Acum vom face routare</h1>
      <div>
        <Link to={"/recipe-list"}>asa merge mai bine</Link>
      </div>
      <button onClick={()=>{navigate('/home/recipe-list')}}>GO to the list</button>
      <button onClick={()=>{navigate('/home/comments-list')}}>Go to the comments list</button>
      <Routes>
        <Route path="/home" element={<Layout/>}>
          <Route path="recipe-list" element={<ReciepeList/>}/>
          <Route path="recipe-list/:id" element={<RecipeDetailsPage/>}/>
          <Route path="comments-list" element={<CommentsList/>}/>

        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/react-hook-form" element={<ReactHookFormExamplePage/>}/>
         </Routes> */}
         <CustomRoutes/>
    </div>
  )
}

export default App
