import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import IdeaInput from './components/IdeaInput'
import Notes from './components/Notes'
import SideBar from './components/SideBar'

type Note = {
  id: number,
  title: string,
  description: string,
  time: string,
  location: string,
}
const data = [
  {
    id: 1,
    title: "Grocery list/ stores",
    description: "Bread flour - instant Dry Extra - virgin Oil, 5 bananas shallot - 4 garlic cloves",
    time: new Date().toLocaleDateString(),
    location: "san francisco"
  },
  {
    id: 2,
    title: "Grocery list/ stores",
    description: "Bread flour - instant Dry Extra - virgin Oil, 5 bananas shallot - 4 garlic cloves",
    time: new Date().toLocaleDateString(),
    location: "san francisco"
  }
];

function App() {
  const [notes, setNote] = useState<Note[]>(data);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const [inputContent, setInputContent] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  const handleSave = () => {
  if (selectedNote) {
    // update the note
    setNote(notes.map(note => 
      note.id == selectedNote.id 
        ?  {...note, title: inputTitle, description: inputContent, time: new Date().toLocaleDateString(), location: "san francisco"}
        : note
    ))
  } else {
    // create a new note
    const data = {
      id: Date.now(),
      title: inputTitle,
      description: inputContent,
      time: new Date().toLocaleDateString(),
      location: "san francisco"
    }
    
    setNote(prev => 
      [...prev, data]
    );

    // clear every data
    setSelectedNote(null);
    setInputContent('')
    setInputTitle('')
  }
}

  console.log(notes);
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
          <Notes 
            notes={notes} 
            setNote={setNote}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
            inputContent={inputContent}
            inputTitle={inputTitle}
            setInputContent={setInputContent}
            setInputTitle={setInputTitle}
          />
          <div className='md:w-2/3'>
            {/* Idea Input Component */}
            <IdeaInput 
              setNote={setNote} 
              inputContent={inputContent}
              inputTitle={inputTitle}
              setInputContent={setInputContent}
              setInputTitle={setInputTitle}
              handleSave={handleSave}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
