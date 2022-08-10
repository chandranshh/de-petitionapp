import React from 'react'
import Navbar from '../Navbar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Petition() {
  return (
    <>
        <Navbar/>
        <div className='text-black mx-[10%] mt-[50px] p-4 flex flex-col space-y-8 bg-white rounded-md' >
            <div>
                <h3 className='text-xl font-extrabold'> Title of the Petition</h3>
                <TextField id="outlined-basic " label="Title" variant="outlined" className='my-3 w-[100%]'/>
            </div>
            <div>
                <h3 className='text-xl font-extrabold'> Describe your problem </h3>
                <TextField id="outlined-textarea" label='Description' hiddenLabel placeholder="Description of petition" minRows={20} multiline className='my-3 w-[100%]'/>
            </div>
            <div>
              <h3 className='text-xl mb-2 font-extrabold'> Add image (optional) </h3>
              <Button variant="contained" 
        
              style={{
              borderRadius: 15,
              backgroundColor: "#ECB365",
              padding: "9px 18px",
              fontSize: "13px",
              color: "#000000",
              fontWeight: "bolder",}}  
              >
            Upload</Button>
            </div>

            <Button variant="contained" 
        
              style={{
              borderRadius: 25,
              backgroundColor: "#ECB365",
              padding: "16px 30px",
              fontSize: "23px",
              color: "#000000",
              fontWeight: "bolder",
              width:"150px",}}  
              className ='self-center'>
            Submit</Button>    
        </div>
    </>
  )
}
