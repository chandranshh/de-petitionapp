import React from 'react'
import Navbar from '../Navbar'
import CardP from './CardP'

export default function Browse() {
  const petitions = [{title: "Title",content: "Content",signatures: "30"},
  {title: "Title",content: "ContentLorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente voluptatem esse pariatur vero praesentium aliquam similique labore exercitationem illum suscipit? Ex quasi quae quaerat rerum fuga quibusdam tenetur nobis eveniet ut, recusandae distinctio perspiciatis, laboriosam quisquam itaque eos laudantium dolorum, ratione ipsa. Omnis, debitis! Nulla facilis repudiandae impedit ea inventore?",signatures: "30"},
  {title: "Title",content: "Content",signatures: "30"}];
  return (
    <>
    <Navbar/>
    <div>
      <h3 className='text-5xl font-extrabold mt-4 text-white text-center'> My Petitons </h3>
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
