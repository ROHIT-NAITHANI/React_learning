import React, { useState } from 'react'
import { useEffect } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/ROHIT-NAITHANI')
    //  .then(Response => Response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" /> </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   
   const Response =  await fetch('https://api.github.com/users/ROHIT-NAITHANI')
   return Response.json()
}