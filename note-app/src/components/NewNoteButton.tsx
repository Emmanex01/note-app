import React from 'react'

const NewNoteButton = () => {
  return (
    <div className='p-4 flex flex-col gap-2 bg-yellow-500 rounded-2xl text-white text-sm'>
      <h2 className='font-medium'>Write down your ideas</h2>
      <div>
        <p>#ideas #to-dos #mornings</p>
        <p>"Sometimes, on Mondays, when server is at A16...</p>
      </div>
        <div className=''>
            <span>1 min</span>
        </div>
    </div>
  )
}

export default NewNoteButton
