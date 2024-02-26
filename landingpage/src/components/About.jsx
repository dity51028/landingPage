import React from 'react'
import img from '../assets/about/img.png'

const About = () => {
  return (
    <div className='h-[900px] mt-[40px] flex flex-col lg:flex-row'>
        <div className='h-[600px] w-[20%] ml-[400px] my-auto'>
            <h1 className='h2'>We Create The Art Of Stylish Living Stylishly</h1>
            <p className='p text-primary my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 quaerat repudiandae delectus, ducimus ad culpa adipisci ex 
                 quaerat repudiandae delectus, ducimus ad culpa adipisci ex 
                 voluptates ab rerum repudiandae officia.</p>
                
                <div className='flex flex-row text-primary gap-6'>
                <svg xmlns="http://www.w3.org/2000/svg" className='mt-2' viewBox="0 0 24 24" width="48" height="48" fill="rgba(185,146,52,1)"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>              
                <p className='p'>123 4567 890 <br />Call Us Anytime</p>
                </div>

            <button className='btn-primary btn p-10 my-8'>Get free Estimation
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
            </button>

        </div>
             <img src={img} className='h-[800px]  m-auto'/>

        
    </div>
  )
}

export default About