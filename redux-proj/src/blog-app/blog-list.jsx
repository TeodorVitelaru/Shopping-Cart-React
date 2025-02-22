import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleDeleteBlog, handleInputChange, setBlogListOnInitialLoad, setCurrentEditedBlogId } from "../store/slices/blogSlice"
import { current } from "@reduxjs/toolkit"



export default function BlogList(){
    const dispatch = useDispatch()
    const {blog} = useSelector(state => state)
    const {blogList} = blog
    
    function onDeleteBlog(getCurrentBlogId){
        dispatch(handleDeleteBlog({
            currentBlogId: getCurrentBlogId
        }))
    }

    function onEditBlog(getCurrentBlog){
        dispatch(setCurrentEditedBlogId({
            currentBlogId: getCurrentBlog.id
        }))
      
        dispatch(handleInputChange({
            title: getCurrentBlog?.title,
            description: getCurrentBlog?.description
        }))

        dispatch
    }

    useEffect(()=>{
        dispatch(setBlogListOnInitialLoad({
            blogList: JSON.parse(localStorage.getItem('blogList')) || []
        }))
    }, [])

    return(
        <ul>
            {
                blogList?.length > 0 ?
                blogList.map(blog => 
                    <div key={blog.id} className="p-2 border">
                        <h1 className="underline">{blog?.title}</h1>
                        <p>{blog?.description}</p>
                        <button onClick={
                            () => onEditBlog(blog)
                        }>Edit blog</button>
                        <button onClick={()=>onDeleteBlog(blog?.id)}>Delete blog</button>
                    </div>
                ) : <h1>Please enter a blog</h1>
            }
        </ul>
    )
}