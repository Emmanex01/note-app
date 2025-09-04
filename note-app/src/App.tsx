import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className='flex h-screen'>
      {/* Left */}
      <div className='w-1/4 border-r border-gray-300 p-4'>
        <h1 className='text-4xl font-bold ml-6'>LOGO</h1>
        <SideBar/>
      </div>
      {/* Right */}
      <div className=' w-3/4 p-4'>
        <Header/>
        <div className='flex mt-4 bg-gray-200'>
          <div className='w-1/3'>Left</div>
          <div className='w-2/3'>Right</div>
        </div>
      </div>
    </div>
  )
}

export default App
