import React from 'react'
import Navbar from '../Navbar'
import CardP from './CardP'

export default function Browse() {
  const petitions = [{title: "Title",content: "Content",signatures: "30"},
  {title: "Title",content: "Content",signatures: "30"},
  {title: "Title",content: "Content",signatures: "30"}];
  return (
    <>
    <Navbar/>
    <div>
      <h3 className='text-5xl font-extrabold mt-4 text-white text-center'> Browse Other Petitons </h3>
      <div className='grid justify-items-center'>
      {petitions.map((data,id)=>{
          return(
            <CardP id = {id} title={data.title} content = {data.content} signature = {data.signatures}/>
          )
        })}
      </div>
    </div>
    </>
  )
}
