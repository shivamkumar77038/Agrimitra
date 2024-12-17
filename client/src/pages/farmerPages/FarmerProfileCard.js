import React  from 'react'
import { useContext } from 'react'
import {Authcontext} from '../../Context/Contextapi';
import { useNavigate } from 'react-router-dom';

export default function FarmerProfileCard() {
  const navigate = useNavigate();
  const {user,logout} = useContext(Authcontext);
  



  const registerCrop =()=>{
    navigate("/farmer/register_crop");
  }

  const allListedCrop =()=>{
    navigate("/farmer/all_listed_crops");
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getContracts =()=>{
    navigate("/farmer/contracts");
  }

  const appliedContracts =()=>{
    navigate("/farmer/appliedcontracts");
  }

  return (
    
    <>
    <div className=' w-2/3 font-serif  sm:w-1/4 h-96 sm:h-2/3 z-50 shadow-lg shadow-green-950 bg-green-400  absolute right-0 rounded-l-2xl '>


    <div className='w-full h-2/5  bg-green-200 sm:h-2/5'>
        <img className="w-1/2 h-1/2 object-contain bg-white " src="51245" alt="" />

        <div className='w-full h-1/2  sm:h-3/6'>
                <h1  className='h-1/2 p-2 font-extrabold text-green-950 '>Name : {user.name}</h1>
                <button onClick={registerCrop} className='h-1/2 w-full bg-green-400 hover:text-white'>Register Crop</button>
                
        </div>
    </div>
     
       

       <div className='w-full h-3/5 sm:h-3/6 rounded-b-md  flex flex-col'>
            <button onClick={allListedCrop} className=' w-full h-1/4 bg-green-200 hover:text-white '>All Listed Crops</button>
            <button onClick={getContracts} className='w-full h-1/4 bg-green-400 hover:text-white'>Contracts</button>
            <button onClick={appliedContracts} className='w-full h-1/4 bg-green-200 hover:text-white '>Applied Contracts</button>
            <button onClick={handleLogout} className='w-full h-1/4 bg-green-400 hover:text-white '>Logout</button>
            
       </div>





    </div>
    </>
  )
}
