import React, { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect( ()=> {
    //     fetch('https://api.github.com/users/anujj009')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4'>
        Github user: {data.login} 
        <img src={data.avatar_url} alt="git pic" width={200}/>
        </div>
  )
}

export default Github

export const githubInfoloader = async () => {
    const response = await fetch ('https://api.github.com/users/anujj009')
    return response.json()

}