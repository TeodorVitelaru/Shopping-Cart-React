import { useParams } from "react-router-dom"


export default function RecipeDetailsPage(){
    const params = useParams()
    const {id} = params

    return (
        <div>
            <h1>Detalii legate de retaetasas {id}</h1>
        </div>
    )
}