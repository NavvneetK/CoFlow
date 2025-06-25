import { SignUp } from '@clerk/nextjs'
import React from 'react'


const SignUppage = () => {
  return (
    <main className='cursor-pointer auth-page'>
        <SignUp/>
    </main>
  )
}

export default SignUppage
