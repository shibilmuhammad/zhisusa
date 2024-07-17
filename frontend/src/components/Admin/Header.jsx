import axios from 'axios';
import React, { useState } from 'react'
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
const Header = () => {
	const navigate = useNavigate();
	const [error,setError] = useState("")
	async function handleLogout(){
		try{
			const response = await axios.post('/api/admin/logout');
			if(response.status==200)navigate('/admin/login');
			else setError("something went wrong !")
			
		}catch(error){
			if(error) setError("something went wrong !")
		}
		
	}
  return (
    <div>
      <div className="h-16 bg-PrimaryBlue-normal text-white flex justify-between px-10 items-center">
				<button className="font-futura text-2xl">LOGO</button>
				<button onClick={handleLogout} ><FiLogOut className="text-2xl font-bold" /></button>
	 </div>
    </div>
  )
}

export default Header
