import { Link } from "react-router-dom";



export default function NotFoundPage(){

    return(
        <div>
            <h3>this page doesnt exist</h3>
            <Link to={"/home/recipe-list"}>Go to the recipe list</Link>
        </div>
    )
}