import './App.css'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className='flex h-screen'>
      {/* Left */}
      <div className='w-1/4 border-r border-gray-300 p-4'>
        <h1 className='text-4xl font-bold'>LOGO</h1>
        <SideBar/>
      </div>
      {/* Right */}
      <div className=' w-3/4 p-4'>
        Right
      </div>
    </div>
  )
}

export default App
