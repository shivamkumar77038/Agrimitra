import React from 'react'
import { useContext } from 'react'
import {Authcontext} from '../../Context/Contextapi';
import { useNavigate } from 'react-router-dom';

export default function RetailProfileCard() {
  const {user,logout} = useContext(Authcontext);
 const navigate = useNavigate();



const registerPropsal =()=>{
  navigate("/retailer/register_crop_demand");
}

const getproposals = ()=>{
  navigate("/retailer/get_allpropsals")
}

const handlelogout =()=>{
logout();
navigate("/");
}

const getContracts =()=>{
  navigate("/retailer/contracts");
}

const appliedContracts =()=>{
  navigate("/retailer/appliedCrops");
}




  return (
    <>
    <div  className=' w-3/5 h-80 font-serif text-sm sm:text-lg sm:w-1/4  sm:h-3/4 z-50 absolute right-0 rounded-l-2xl '>


    <div className='w-full h-2/5 bg-green-200 sm:h-2/5'>
        <div className='usericondiv w-1/2 h-1/2 rounded-r-3xl '></div>

        <div className='w-full h-1/2  sm:h-3/6'>
               <p className='h-1/2 ml-2 text-xs sm:text-base font-bold text-black '>{user.name} </p>
                <button onClick={registerPropsal} className='h-1/2 w-full bg-green-400 hover:text-white'>Register Your Proposal</button>
                
        </div>
    </div>
     
       

       <div className='w-full h-3/5 sm:h-3/6 rounded-b-md  flex flex-col'>
            <button onClick={getproposals} className='button w-full h-1/4 bg-green-200 hover:text-white'>My Proposals</button>
            <button onClick={getContracts}  className='w-full h-1/4 bg-green-400 hover:text-white'>Contracts</button>
            <button onClick={appliedContracts} className='w-full h-1/4 bg-green-200 hover:text-white'>Applied Crop Proposals</button>
            <button onClick={handlelogout}className='w-full h-1/4 bg-green-400 hover:text-white'>Logout</button>
            
       </div>
    </div>
    </>
  )
}
