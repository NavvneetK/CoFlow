import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInpage = () => {
  return (
    <main className='cursor-pointer auth-page'>
        <SignIn/>
    </main>
  )
}

export default SignInpage
