import React, { type SetStateAction } from 'react'
import NewNoteButton from './NewNoteButton'
import { MdDelete } from "react-icons/md";

type Note = {
  id: number,
  title: string,
  description: string,
  time: string,
  location: string,
}

type NotesProp = {
  notes: any[];
  setNote: React.Dispatch<SetStateAction<Note[]>>,
  selectedNote: (Note | null)
  setSelectedNote: React.Dispatch<SetStateAction<Note | null>>,
  inputContent: string,
  inputTitle: string,
  setInputContent: React.Dispatch<React.SetStateAction<string>>,
  setInputTitle: React.Dispatch<React.SetStateAction<string>>,
}


const Notes = ({notes, setNote, selectedNote, setSelectedNote, inputContent, inputTitle, setInputContent, setInputTitle}: NotesProp) => {

const handleEdit = (note: Note) => {
  setSelectedNote(note);
  setInputContent(note.description)
  setInputTitle(note.title)
}

const handleDelete = (id: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  e.stopPropagation();
  setNote(notes.filter(note => note.id != id));
  setSelectedNote(null);
  setInputContent('')
  setInputTitle('')
}

  return (
    <div className='flex flex-col gap-2 md:w-1/3'>
      <h1 className='font-medium text-3xl p-4 '>Notes</h1>
      {notes.map((note) => (
        <div key={note.id} 
          className='p-4 flex flex-col gap-2 bg-gray-100 rounded-2xl text-gray-400 relative text-sm'
          onClick={() => handleEdit(note)}
        >
          <h2 className='font-medium text-black'>{note.title}</h2>
          <p>{note.description}</p>
          <div className='flex justify-between'>
              <span>{note.time}</span>
              <span className='text-yellow-600 font-medium'>{note.location}</span>
          </div>
          <div className='w-5 h-5 rounded-4xl bg-amber-400 flex justify-center items-center absolute right-1 top-2'>
            <div className='rounded-4xl w-2 h-2 bg-white'></div>
          </div>
          <div 
            className='w-5 h-5 rounded-4xl bg-gray-400 text-white flex justify-center items-center absolute right-7 top-2'
            onClick={(e) => handleDelete(note.id, e)}
          >
            <MdDelete/>
          </div>
        </div>
      )
      )}
      
      <NewNoteButton/>
    </div>
  )
}

export default Notes
