import React,{useContext} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { Authcontext } from "../../Context/Contextapi";
import axios from "axios";
import { toast } from 'react-toastify';

export default function CropViewCard() {
  const location = useLocation();
  const crops = location.state
  const navigate = useNavigate();

  const {token} = useContext(Authcontext);
 
  const { cropName, quantity, pricePerunit, harvestedDate, createdAt,farmLocation,_id,farmingMethod,farmerName } = crops;

  //submit proposal request
const submitProposal = async(id)=>{
if(!token){
  toast.warn("Login To Proceed");
  navigate("/login");
  return;
}

   try{
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/retailProposal/crop/${id}`,{},{
      headers:{
        'Authorization': `Bearer ${token}`,  
        'Content-Type': 'application/json'
      }
    })
      
    if(response){
      
      toast.success(response.data.message);
      navigate("/Allcrops");
    }

   }catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          navigate("/Retaillogin");
          toast.warn(error.response.data.message);
          break;
        case 400:
          toast.warn(error.response.data.message);
          navigate("/Allcrops");
          break;
        default:
          console.log("Unexpected error:", error);
          toast.error("An unexpected error occurred. Please try again.");
          navigate("/Allcrops");
      }
    } else {
      
      console.log("Unexpected error:", error);
      toast.error("Something Went Wrong");
      navigate("/Allcrops");
    }
  }

}

  
  return (
    <div className='w-full min-h-screen h-auto flex justify-center'>
      <div className="bg-green-300 border font-serif border-green-200 rounded-lg m-4  shadow-lg p-4 w-auto sm:w-3/4">
      <div className="flex  space-x-2 mb-4">

                  <div className='w-full h-36 bg-white'>
                         <img className='w-full h-full object-contain' src="#1234" alt={`${cropName} img1`} />
                  </div>
                  <div className='w-full h-36 bg-white'>
                         <img className='w-full h-full object-contain' src="#123456" alt={`${cropName} img2`} />
                  </div>
                  <div className='w-full h-36 bg-white' >
                             <img className='w-full h-full object-contain' src="#123" alt={`${cropName} img3`} /> 
                  </div>
       
      </div>
      <div className=" text-center">
        <h2 className="text-xl font-bold   text-green-900">{cropName.toUpperCase()}</h2>
        <p className="text-green-900 text-sm mt-3  font-bold">Available Quantity: {quantity.weight} {quantity.unit}</p>
        <p className="text-green-900 text-sm mt-3  font-bold">Farmer Name: {farmerName}</p>
        <p className="text-green-800 text-lg  font-bold mt-3">Price: {pricePerunit.price} Rs/{pricePerunit.unit}</p>
        <p className="text-green-900 text-left sm:text-center text-sm mt-1 font-semibold">Farm Address: {` ${farmLocation.address}, ${farmLocation.city}, ${farmLocation.state} Pincode:${farmLocation.pincode}`}</p> 
        <p className="text-green-800 text-sm  font-bold mt-3">Farming Method: {farmingMethod}</p>
        <p className="text-green-900 font-bold  text-sm mt-3">Harvested Date: {new Date(harvestedDate).toLocaleDateString()}</p>
        <p className="text-green-800 text-sm  font-bold mt-3">Listed Date: {new Date(createdAt).toLocaleDateString()}</p>
        <button onClick={()=>submitProposal(_id)} className="bg-red-500 w-1/2 text-white text-lg hover:bg-orange-900 mt-3">
          Apply For Crop 
        </button>
      </div>
    </div>

    </div>
  )
}
