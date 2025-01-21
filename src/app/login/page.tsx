"use client"
import React from 'react'
import { Axios } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



const login = () => {

  const [user, setUser] = React.useState({
    email:'',
    password:'',
    
  })
  const onlogin = async () => {}

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='mb-4'>login</h1>
      <hr />

      <label htmlFor="email">email</label>
      <input className='p-2' type="text" id='email' value={user.email} onChange={(e) => setUser({...user,email: e.target.value})} placeholder='email' />
      <label htmlFor="password">password</label>
      <input className='p-2' type="text" id='password' value={user.password} onChange={(e) => setUser({...user,password: e.target.value})} placeholder='password' />
      <button onClick={onlogin} className='p-2 border border-gray-400 rounded-lg mb-4 mt-4 focus:outline-none focus:border-gray-900'>login here</button>
      <Link href='/signup'>visit signup page  </Link>
    </div>
  )
}

export default login