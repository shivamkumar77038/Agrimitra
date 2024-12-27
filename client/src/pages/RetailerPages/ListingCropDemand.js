import React,{useContext,useState} from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Authcontext } from '../../Context/Contextapi';
import { useNavigate } from 'react-router-dom';

export default function ListingCropDemand() {
    const navigate = useNavigate();
    const {token} = useContext(Authcontext);
    const [loading, setLoading] = useState(false);
    const backendurl= process.env.REACT_APP_BACKEND_URL ;
    

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


const submit = async (data)=>{
    setLoading(true);
    
    try{
       
        const response = await axios.post(`${backendurl}/retail/listdemand`,data,{
            headers: {
                'Authorization': `Bearer ${token}`,  // Set the Authorization header with the JWT
                'Content-Type': 'application/json'
              }
        });
            toast.success(response.data.message);
            navigate("/");
      
        

    }catch(error){
        navigate("/")
        if(error.status === 400){
            console.log(error);
            toast.warning(error.response.data.message);
        }else{
            toast.warning("Request Failed");
            console.log(error);
        }
    }finally{
        setLoading(false);
    }
       
}



  return (
    <>
        <div className='w-full font-serif h-auto text-sm sm:text-base  bg-green-400 flex flex-col justify-center '>
            
            <div className='flex justify-center m-10 bg-green-600 '>
                        <p className='font-bold text-green-900 text-lg sm:text-xl text-center text- '>Enter Crop Details To List Your Crop</p>
                     </div>
                
                 <div className='formmaindiv flex justify-center w-full h-auto '>
                 {/*form div start */}
                    <form onSubmit={handleSubmit(submit)} className=' font-semibold m-1  roundex-3xl   w-11/12 sm:w-2/3 h-full  flex flex-col justify-evenly'>
                   
                     
        
                        <div className='cropName '>
                            <label htmlFor="cropname_dem">Enter Crop Name</label>
                            <input {...register('cropName',{required:true})} className="mt-1 p-2 h-10 block w-full rounded-md outline-none" placeholder="CropName" type="text" id="cropName_dem" />
                            {errors.cropName && <p className ='text-red-500'>Enter crop Name</p>}
                        </div>
        
                        <div className='category_dem mt-1'>
                            <label htmlFor="category_dem">Enter Crop Category</label>
                            {/*adding function to select*/}
                            <select {...register('category',{required:true})} className='w-full h-10 ' id="category_dem ">
                                    <option value="">--Select a crop--</option>
                                    <option value="grain">Grain</option>
                                    <option value="wheat">wheat</option>
                                    <option value="corn">Corn</option>
                                    <option value="rice">Rice</option>
                                    <option value="vegitable & fruits">Vegitable & Fruits</option>
                                    <option value="nuts & pulses">Nuts & Pulses</option>
                                    <option value="oilseed crop">Oilseed Crop</option>
                                    <option value="others">others</option>
                            </select>
                            {errors.category && <p className='text-red-500'>Select category</p>}
        
                        </div>
                      
        
        
                        <div className='farmingtype mt-2'>
                            <label htmlFor="farming_dem ">Farming Method</label> <br />
                        <select {...register('farmingMethod',{required:true})} className='w-full h-10 rounded-md'>/
                                 <option value="">--select Farming method--</option>
                                <option vlaue="organic">Organic (without the use of synthetic fertilizers or pesticides)</option>
                                <option value="conventional">Conventional (growing  with synthetic fertilizers or pesticides)</option>
                            </select>
                            {errors.farmingMethod && <p className='text-red-500'>Select Farming Method</p>}
        
        
        
                        </div>
        
                        <div className='qunatity_div mt-1'>
                            <label htmlFor="qunatity_dem">Enter Qunatity</label> <br />
                            <input  {...register('weight',{required:true})}  className="mt-1 w-8/12 h-10 rounded-l-md outline-none p-2"  type="Number" id="qunatity_dem" />
                            {errors.weight && <p className='text-red-500'>Enter Quantity</p>}
        
                            <select  {...register('weightunit',{required:true})} className='w-1/3 h-10 rounded-r-md'>/
                                 <option value="">--Choose Unit--</option>
                                <option value="kg">kg</option>
                                <option value="ton">Tons</option>
                                <option vlaue="metricton">MetricTon</option>
                            </select>
                            {errors.weightunit && <p className='text-red-500'>choose weight Unit</p>}
                        </div>
        
                        <div className=' desiredPricePerUnit_div mt-1'>
                            <label htmlFor="price_dem">Enter Desired Price/Unit in Rs</label><br />
                            <input {...register('price',{required:true})}  className="mt-1  w-2/4 h-10 rounded-l-md outline-none p-2" type="Number" id="price_dem" />
                            {errors.price && <p className='text-red-500'>Enter Price/unit</p>}
                            <select {...register('unit',{required:true})}  className='w-1/3 h-10 rounded-r-md'>/
                                 <option value="">--Choose Units--</option>
                                <option value="kg">kg</option>
                                <option vlaue="tons">Ton</option>
                                <option vlaue="metricton">MetricTon</option>
                            </select>
                            {errors.unit && <p className='text-red-500'>Select Price unit</p>}
                        </div>
        
                        <div className='deliveryDate_div mt-1'>
                            <label htmlFor="deliverydate">Enter Delivery Date</label>
                            <input {...register("deliverydate",{required:true})} className="mt-1 h-10 block w-full  rounded-md " type="Date" id="deliveryDate" />
                            {errors.deliverydate && <p className='text-red-500'>Select date</p>}
                        </div>
        
                        <div className='address_div mt-1'>
                    <label htmlFor="address_dem">Enter delivery Address</label>
                    <input {...register('address',{ required: true })}  className="mt-1 h-10 block w-full outline-none  rounded-md   p-2" type="text" id="address_dem" />
                    {errors.address && <p className='text-red-600'>Address is required</p>}
                </div>

                <div className='city_div mt-1'>
                    <label htmlFor="city_dem">Enter City</label>
                    <input {...register('city',{ required: true })}  className="mt-1 h-10  block w-full outline-none rounded-md p-2" type="text" id="city_dem" />
                    {errors.city && <p className='text-red-600'>City name is required</p>}
                </div>

                <div className='state_div mt-1'>
                    <label htmlFor="state_dem">Enter State</label>
                    <input {...register('state',{ required: true })}  className="mt-1 h-10 block w-full outline-none  rounded-md   p-2" type="text" id="state_dem" />
                    {errors.state && <p className='text-red-600'>State name is required</p>}
                </div>

                <div className='pincode_div mt-1'>
                    <label htmlFor="pincode_dem">Enter Your Pincode</label>
                    <input  {...register("pincode", {
                            required: "Pincode number is required",
                            minLength: {
                                value: 4,
                                message: "Pincode must be at least 4 digits"
                              },
                            pattern: {
                            value:  /^[0-9]+$/,
                            message: "Pincode must be Number"
                            }
                        })}
                   className="mt-1 block w-full h-10  rounded-md outline-none p-2" placeholder='123456' type="text" id="pincode_dem" />
                    {errors.pincode && <p className='text-red-600'>{errors.pincode.message}</p>}
                </div>
        
                    
                        <div className='m-8 '>
                            <button type="submit" disabled={loading} className='w-full h-10  bg-green-800 text-white p-2 rounded-md hover:bg-green-900 focus:outline-none  focus:ring-2 focus:ring-green-800 focus:ring-offset-2'> {loading ? 'Submitting...' : 'Register Crop Demand'}</button>
                        </div>
        
                    </form>
                 </div>
                 
        
                 <div className='bg-white w-full h-10'>
        
                 </div>
          </div>
       
    </>
  )
}
