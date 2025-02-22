import { useDispatch, useSelector } from "react-redux"
import { handleInputChange, handleAddTodo, handleEditBlog, setCurrentEditedBlogId } from "../store/slices/blogSlice"



export default function AddNewBlog(){

    const {blog} = useSelector(state=>state)
    const dispatch = useDispatch()
    const {currentEditedBlogId} = blog

    function handleOnChangeInput(event){
        dispatch(handleInputChange({
            [event.target.name] : event.target.value
        }))
    }

    function handleTodoSubmit(event){
        event.preventDefault()

        if(currentEditedBlogId != null){
            dispatch(handleEditBlog())
        } else{
            dispatch(handleAddTodo())
        }

        dispatch(setCurrentEditedBlogId({
            currentBlogId: null
        }))
        dispatch(handleInputChange({
            title: '',
            description:''
        }))
    }

    return(
        <div className="border p-2 mt-2">
            <form onSubmit={handleTodoSubmit}>
                <div className="p-2">
                    <label className="px-2">Enter BLog title</label>
                    <input className="border px-2"
                    type="text"
                    name="title"
                    placeholder="Enter a blog title"
                    id="title"
                    onChange={handleOnChangeInput}
                    value={blog?.formData?.title}
                    />
                </div>
                <div>
                    <label className="px-2">Enter BLog description</label>
                    <input className="border px-2"
                    type="text"
                    name="description"
                    placeholder="Enter a blog description"
                    id="title"
                    onChange={handleOnChangeInput}
                    value={blog?.formData?.description}
                    />
                </div>
                <button className="mt-5 !bg-gray-900 text-white"
                type="submit">
                    {
                        blog?.currentEditedBlogId ? 'Edit Blog' : 
                        'Add new blog'
                    }
                </button>
            </form>
        </div>
    )
}