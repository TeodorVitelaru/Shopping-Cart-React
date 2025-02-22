import { useEffect, useState } from "react"



export default function ApiCallTest(){

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')

                const data = await response.json()
                setUsers(data)
                setIsLoading(false)
            } catch (error) {
                console.log('error', error);
                
            }
      }
      fetchUsers()
    }, [])
    

    return(
        <div>
            {
                isLoading ?
                    <h1>Loading data...</h1> :
                    <ul>
                        {
                            users.length > 0 ? 
                            users.map(user => 
                                <li >
                                    <h3>{user.name}</h3>
                                </li>
                            ) : <h1>No users found</h1>
                        }
                    </ul>
            }
        </div>
    )
}