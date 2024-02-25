import React from 'react'

const Hero = () => {
  return (
    <>

    <section className='h-[640px] xl:h-[1000px]  bg-hero bg-center w-screen bg-cover bg-fixed bg-no-repeat xl:rounded-bl-[290px]'>
      <div className='container mx-auto h-full flex items-center'>
        <div className='flex items-center xl:items-start flex-col  xl:text-start w-[576px]'>
        <h1 className='h1 mb-8'>Let Your Home Be Unique</h1>
        <p className='text-secondary mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio harum facere, sed reiciendis eaque est non labore voluptates, 
          ipsam ullam vel dolorem laboriosam excepturi fuga cupiditate quo maiores consequatur!</p>
          <div className='bg-primary px-6 py-4 flex flex-row gap-4 rounded-[18px]'>
            <button>Get free estimation</button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(255,255,255,1)">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
          </div>
          </div>

        
      </div>
    </section>
    </>
  )
}

export default Hero