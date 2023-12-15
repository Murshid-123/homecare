import React from 'react'
import logo from '../../assets/logo.png'

function Topbar() {
  return (
    <div>
        <div className='w-full h-24 bg-blue-400 flex sticky top-0'>
            <div className='text-4xl text-white  flex justify-center items-center my-4 ml-24 gap-2'>
                <img src={logo} alt="sd" className='w-16 h-10 cursor-pointer'/>
                <h1 className='cursor-pointer'>RITS HOMECARE</h1>
            </div>
            <div className='flex text-lg justify-center items-center text-white ml-36'>
                <div className='mx-4 hover:text-orange-300 cursor-pointer'>Home</div>
                <div className='mx-4 hover:text-orange-300 cursor-pointer'>About us</div>
                <div className='mx-4 hover:text-orange-300 cursor-pointer'>Contact us</div>
                <div className='mx-4 hover:text-orange-300 cursor-pointer'>Find Care</div>
            </div>
            <div className='flex justify-around items-center flex-1 ml-20'>
                <button className="my-8 flex justify-center items-center w-40 bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 shadow-md">
                    Login
                </button>
                <button className="my-8 flex justify-center items-center w-40 bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 shadow-md">
                    SignUp
                </button>
            </div>


        </div>
    </div>
  )
}

export default Topbar