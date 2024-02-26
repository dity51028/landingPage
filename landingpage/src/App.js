import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Steps from "./components/Steps"


const App = () => {
  return (
    <main className='bg-grid bg-contain text-white overflow-hidden'>
        <Nav/>
        <Hero/>
        <Steps/>
        <div className='h-[7000px]'></div>
       </main >

 
  )
}

export default App


/***
 * to-do1 : design the parent container
 * to-do2: hero page design
 * **/
