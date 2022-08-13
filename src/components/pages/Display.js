import React from 'react';
import Navbar from '../Navbar';
import {onSign} from '../../App'
import Button from '@mui/material/Button';
import {BiShare} from 'react-icons/bi';
import ProgressBar from '../ProgressBar';
import { useLocation } from "react-router-dom";

export default function Display() {
  const location = useLocation();
  return (
    <>
        <Navbar/>
        <div className='text-black mx-[20%] mt-[50px] flex flex-col space-y-8 bg-white rounded-md pt-4' >  
        <div className="p-10 pt-0">
            <h3 className='text-3xl font-extrabold mb-2'> {location.state.title}</h3>
            <p className='mb-3'>{location.state.content}</p>
        
            <div className="flex justify-between mt-5 mb-4">
            <Button variant="contained" 
            
            style={{
            borderRadius: 15,
            backgroundColor: "#C84B31",
            padding: "9px 18px",
            fontSize: "15px",
            color: "#FFFFFF",
            fontWeight: "bolder",}}
            
            onClick = {()=>{
              onSign(location.state.number)
            }}
            >
        Sign this Petiton</Button>
        <Button variant="contained" 
            
            style={{
            borderRadius: 15,
            backgroundColor: "#ECB365",
            padding: "9px 18px",
            fontSize: "15px",
            color: "#000000",
            fontWeight: "bolder",}} 
            className ='flex items-center' 
            >
              <BiShare className='mr-2 '/>
            Share Link</Button>   
            </div>
            <ProgressBar number = {location.state.signature} />
            
        </div>
        </div>
    </>
    
  )
}
