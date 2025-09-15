import React, { useState, type FC } from 'react'
import noteIcon from '../assets/noteIcon.png';
import { FaLightbulb } from "react-icons/fa6";

type IdealnputProp = {
  setNote: React.Dispatch<React.SetStateAction<any[]>>;
  inputContent: string,
  inputTitle: string,
  setInputContent: React.Dispatch<React.SetStateAction<string>>,
  setInputTitle: React.Dispatch<React.SetStateAction<string>>,
  handleSave: () => void,
}

const IdeaInput = ({setNote, inputContent, inputTitle, setInputContent, setInputTitle, handleSave} : IdealnputProp) => {
  
  const data = {
    id: Date.now(),
    title: inputTitle,
    description: inputContent,
    time: new Date().toLocaleDateString(),
    location: "san francisco"
  }
  return (
    <div>
      <div className='flex justify-center'>
        <img src={noteIcon} alt="note Icon" className=''/>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex items-center'>
            <h1 className='font-medium text-3xl'>Write down your Ideas</h1>
            <FaLightbulb className='w-10 h-10 text-amber-300'/>
        </div>
        
        <div className='flex gap-4 font-medium text-yellow-700'>
            <span>#ideas</span>
            <span>#to-do's</span>
            <span>#morning's</span>
        </div>
        <div>
            <input 
              type="text" 
              className='outline-0 p-2 focus:ring-amber-200 focus:ring-2 rounded-lg' 
              placeholder='Title...' 
              value={inputTitle}
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <textarea 
                name="" id=""
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
                className=' w-full min-h-[150px] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none'
                placeholder="What’s on your mind today? Write freely about your goals, wild ideas, or even just random thoughts you don’t want to lose. Think of this space as your personal scratchpad—messy is okay, big dreams are welcome."
            ></textarea>
        </div>
        <div className='flex gap-4 justify-end'>
            <button 
              className='font-medium text-xl bg-gray-200 p-4 rounded-4xl w-12 h-12 flex justify-center items-center'
              onClick={() => {
                handleSave()
              }
              }
            >
              +
            </button>
            <button className='font-medium bg-gray-200 p-4 rounded-4xl w-12 h-12 flex justify-center items-center'>Aa</button>
        </div>
      </div>
    </div>
  )
}

export default IdeaInput
