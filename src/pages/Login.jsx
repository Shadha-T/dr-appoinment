import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('sign up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 items-start m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-green-900 shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'sign up' ? 'Create account' : "Login"}</p>
        <p>Please {state === 'sign up' ? 'sign up' : "login in"} to book appoinment</p>
        {
          state === "sign up" && <div className='w-full' >
            <p>Full name</p>
            <input className='border border-gray-300 rounded w-full p-2  mt-1' type='text' onChange={(e) => setName(e.target.name)} value={name} required />
          </div>
        }


        <div className='w-full'>
          <p>Email</p>
          <input className='border border-gray-300 rounded w-full p-2  mt-1' type='email' onChange={(e) => setEmail(e.target.name)} value={email} required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-gray-300 rounded w-full p-2  mt-1' type='password' onChange={(e) => setPassword(e.target.name)} value={password} required />
        </div>

        <button className='bg-green-900 text-white py-2 w-full rounded-md text-base'>{state === 'sign up' ? 'Create account' : "Login"}</button>
        {
          state === 'sign up'
            ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-red-500 underline cursor-pointer'>Login here</span></p>
            : <p>Create a new account? <span onClick={() => setState('sign up')} className='text-red-500 underline cursor-pointer'> click here </span></p>
        }
      </div>

    </form>
  )
}

export default Login
