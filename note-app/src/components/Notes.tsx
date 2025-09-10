import React from 'react'
import NewNoteButton from './NewNoteButton'

const data = [
  {
    title: "Grocery list/ stores",
    description: "Bread flour - instant Dry Extra - virgin Oil, 5 bananas shallot - 4 garlic cloves",
    time: "1 min",
    location: "san francisco"
  },
  {
    title: "Grocery list/ stores",
    description: "Bread flour - instant Dry Extra - virgin Oil, 5 bananas shallot - 4 garlic cloves",
    time: "1 min",
    location: "san francisco"
  }
];

const Notes = () => {
  return (
    <div className='flex flex-col gap-2 md:w-1/3'>
      <h1 className='font-medium text-3xl p-4 '>Notes</h1>
      {data.map((note, index) => (
        <div key={index} className='p-4 flex flex-col gap-2 bg-gray-100 rounded-2xl text-gray-400 relative text-sm'>
          <h2 className='font-medium text-black'>{note.title}</h2>
          <p>{note.description}</p>
          <div className='flex justify-between'>
              <span>{note.time}</span>
              <span className='text-yellow-600 font-medium'>{note.location}</span>
          </div>
          <div className='w-5 h-5 rounded-4xl bg-amber-400 flex justify-center items-center absolute right-2 top-2'>
            <div className='rounded-4xl w-2 h-2 bg-white'></div>
          </div>
        </div>
      )
      )}
      
      <NewNoteButton/>
    </div>
  )
}

export default Notes
