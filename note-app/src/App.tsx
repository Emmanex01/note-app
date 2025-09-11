import './App.css'
import Header from './components/Header'
import IdeaInput from './components/IdeaInput'
import Notes from './components/Notes'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className='flex h-screen'>
      {/* Left */}
      <div className='w-1/5 border-r border-gray-300 p-4'>
        <h1 className='text-4xl font-bold ml-6'>LOGO</h1>
        <SideBar/>
      </div>
      {/* Right */}
      <div className=' w-4/5 p-4 overflow-y-auto h-full'>
        <Header/>
        <div className='flex flex-col gap-12 md:flex-row mt-4'>
          <Notes/>
          <div className='md:w-2/3'>
            {/* Idea Input Component */}
            <IdeaInput/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
