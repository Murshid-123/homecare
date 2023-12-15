import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className='h-36 bg-blue-400'>
        <div className='flex flex-col items-center justify-center'>
            <div className='p-4 text-xl'>
                Follow us on
            </div>
            <div className='flex justify-center items-center  gap-6'>
                <InstagramIcon className=' bg-white rounded-lg'/>
                <LinkedInIcon className=' bg-white rounded-lg'/>
                <TwitterIcon className=' bg-white rounded-lg'/>
                <FacebookIcon className=' bg-white rounded-lg'/>
            </div>
            <div className='flex flex-1 items-center justify-center text-xl p-3'>
                All rights to RITS
            </div>
        </div>
    </div>
  )
}

export default Footer