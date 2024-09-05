import React, { useEffect, useState } from 'react'
import axios from '../../api/axios.js';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [Profile, setProfile] =useState({})
const token =useSelector (state => state.token)

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios("/auth/profile",{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        setProfile(response.data)
        console.log(response.data)
      }
      catch (error) {
        console.log(error)
      }

    }
    getProfile()
  }, [])
  return (
    <>
   <div className='flex justify-center  h-screen  bg-gradient-to-r from-purple-500 to-pink-500'>
   <div className="w-[300px] h-[300px] flex flex-col items-center justify-center bg-gray-100 relative group rounded-3xl shadow-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer shadow my-[150px]">
  
  <div className="before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:to-purple-500 before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100 group-hover:before:blur-sm"></div>

  <img 
    src={Profile.avatar} 
    alt="Avatar" 
    className="w-24 h-24 rounded-full z-10 transition-transform duration-300 group-hover:scale-110 active:scale-100"
  />

  <h1 className="mt-4 text-xl font-bold text-gray-700 z-10 transition-colors duration-300 group-hover:text-white">
    {Profile.name}
  </h1>

  <p className="text-sm text-gray-500 z-10 transition-colors duration-300 group-hover:text-white">
    {Profile.email}
  </p>

  <div className="after:content-['Profile Card'] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:text-xs after:text-gray-400 after:opacity-0 after:transition-opacity after:duration-300 group-hover:after:opacity-100"></div>
  
</div>

   </div>
    </>
  )
}

export default Profile