import React from 'react'
import'./Navbar.css'
const Navbar = () => {
  return (
    <div className='mx-2 md:mx-8'>
      <div className="flex items-center justify-between h-16 border-b-[.5px] border-accent dark:border-gray-600">
        <div className="flex items-center justify-between flex-1">
          <a className="text-black dark:text-black font-bold" href="/home">Job Management</a>
          <div className="flex items-center justify-center">
            <div>
              <button className="md:hidden text-accent dark:text-secondary hover:bg-success hover:dark:bg-gray-600 px-3 py-2 rounded-full text-sm font-medium border-[.5px] border-accent dark:border-info ">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: '1.5em' }}>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path>
                </svg>
              </button>
            </div>
            <button className="text-accent dark:text-secondary ml-4 md:hidden">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:items-center">
          <button className="animate-pulse inline-block duration-500 text-accent dark:text-secondary hover:bg-success hover:dark:bg-gray-600 px-3 py-2 rounded-full text-sm font-medium border-[.5px] border-accent dark:border-info mr-1">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ fontSize: '1.5em' }}>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path>
            </svg>
          </button>
          <a aria-current="page" className="duration-300 text-accent dark:text-secondary px-3 py-2 hov text-sm font-semibold" href="/home">Home</a>
          <a className="duration-300 justify-center items-center flex text-accent dark:text-secondary hov hover:scale-105 px-3 py-2 text-sm font-semibold" href="/poster-seeker">Job Poster/Seeker</a>
          <a className="duration-300 justify-center items-center flex text-accent dark:text-secondary hov hover:scale-105 px-3 py-2 text-sm font-semibold" href="/all-job">Find Job</a>
          <a className="duration-300 justify-center items-center flex text-accent dark:text-secondary hov hover:scale-105 px-3 py-2 text-sm font-semibold" href="/blog">Blogs</a>
          <a className="duration-300 justify-center items-center flex text-accent dark:text-secondary hov hover:scale-105 px-3 py-2 text-sm font-semibold" href="/login">Login</a>
          <a className="duration-300 justify-center items-center flex text-accent dark:text-secondary hov hover:scale-105 px-3 py-2 text-sm font-semibold" href="/registration">Registrations</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
