import React from 'react'
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar';
function ReadMore({content,link ='#'}){
  const newText = content.slice(0,200);
  return(
    <>
    {newText}
    <Link to= {link} className ='text-red-500 hover:text-red-900'>...Read More</Link>
    </>
  )
}
export default function CardP({id,title,content,signature}) {
  return (
    <div className='w-[45%] bg-white rounded-md flex my-4' id={id}> 
    <img src="/images/test.jpg" alt="" className='w-[200px] rounded-tl-md object-cover'/>
    <div className='flex-col p-3'>
      <h3 className='text-3xl font-extrabold mb-2'> {title}</h3>
      <ReadMore content ={content} link='/display'/>
    <ProgressBar number= {signature}/>
    </div>
    </div>
  )
}
