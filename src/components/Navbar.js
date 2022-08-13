import React, { useState,useEffect } from 'react';
import {BsWallet} from 'react-icons/bs';
import { Link} from 'react-router-dom';  
import {getAccount, connectWallet} from '../utils/wallet'; 


export default function Navbar() {

  const [account, setAccount] = useState("");

  useEffect(() => {
    (async () => {
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  const onConnectWallet = async () => {
    await connectWallet();
    const account = await getAccount();
    setAccount(account);
  };

  return (
    <>
    <div className='sticky top-0 gap-[10rem] flex flex-row shadow-md space-x-12 bg-zinc-900 text-white w-[100%] h-[50px] justify-between px-5 items-center '>
      
      <Link to="/" className='nav-items'>The Decentralised Petition App</Link>

      <div className='flex justify-items-start space-x-10'>
        <Link to="/" className='nav-items'>Home</Link>
        <Link to="/mypetitions" className='nav-items'>My Petitons</Link>
        <Link to="/browse" className='nav-items'>Browse</Link>
        <Link to="#" className='wallet flex items-center' onClick={onConnectWallet}><BsWallet className='mr-2'/>{account !=="" ? account:"Connect to Wallet"}</Link>
      </div>
    </div> 
    </>
  )
}

