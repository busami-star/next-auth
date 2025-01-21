"use client"
import React from 'react'
import { Axios } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



const signup = () => {

  const [user, setUser] = React.useState({
    email:'',
    password:'',
    username:'',
  })
  const onSignup = async () => {}

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      signup
    </div>
  )
}

export default signup