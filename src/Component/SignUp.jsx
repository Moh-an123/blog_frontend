import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import React from 'react'

const SignUp = () => {
  return (
    <div className='w-1/2 py-10 px-20'>
      <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-black text-slate-100 rounded-lg border-1 shadow"
        aria-label="signup-form"
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Sign Up Form</h2>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your email address..."
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-end mb-5 text-slate-400">
          <p>Already have an account?</p>
          <a href="/login" className="text-blue-500 underline">
            Sign In
          </a>
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Create an account
        </button>
      </form>
     {/* <Card >
      <CardHeader >
              SignUp Form
      </CardHeader>
          <CardBody>

          </CardBody>
 <CardFooter>
  <Button >Submit</Button>
 </CardFooter>
     </Card> */}
    </div>
  )
}

export default SignUp
