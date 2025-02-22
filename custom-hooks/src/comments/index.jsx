import useFetch from "../hooks/use-fetch"



export default function CommentsList(){

    const {data, loading, error} = useFetch('https://dummyjson.com/comments')

    if(loading) <h1>Asteapta sa se incarce</h1>


    return(
        <div>
            <h1>Comment-list</h1>
            <ul>
                {
                    data?.comments.length > 0 ?
                    data.comments.map(item =>
                        <div>
                            <p>{item?.body}</p>
                            <p>{item?.likes}</p>
                        </div>
                    ) : null
                }
            </ul>
        </div>
    )
}