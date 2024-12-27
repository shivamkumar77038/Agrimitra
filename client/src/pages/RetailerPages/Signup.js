import React,{useContext} from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios";
import { toast } from 'react-toastify';
  import {  useNavigate } from 'react-router-dom';
  import { Authcontext } from '../../Context/Contextapi';


export default function Signup() {
   const navigate= useNavigate();
   const {login}  = useContext(Authcontext);
   const backendurl= process.env.REACT_APP_BACKEND_URL ;
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

 const submit= async (data)=>{
   
    try {
        const response = await axios.post(`${backendurl}/retail/signup`, data);
         toast.success(response.data.message);
         
         login(response.data.token,response.data.user);
         
        navigate("/")
        
      } catch (error) {
        navigate("/");
        if(error.status===400){
            
            toast.warning(error.response.data);
        }else{
            toast.error("Request Failed");
            console.log("error from signup retail",error);
        }
      }

 }     
 





  return (
    <>
    <div className='w-full h-1 bg-white'></div>
    <div className='ignupdiv w-full h-auto bg-gradient-to-r from-green-300 via-green-500 to-green-700 flex flex-col justify-center '>
    <div className='flex justify-center m-10  '>
                <p className='font-bold text-green-900 text-lg sm:text-xl '>Enter  Details To Register</p>
             </div>
        
         <div className='formmaindiv flex justify-center w-full h-auto '>
         {/*form div start */}
            <form onSubmit={handleSubmit(submit)}  className='formdiv m-1  roundex-3xl font-mono text-xs sm:text-base font-semibold sm:font-semibold  w-4/5 sm:w-2/3 h-full  flex flex-col justify-evenly'>
           
             

                <div className=' name_div '>
                    <label htmlFor="name">Enter Your Name</label>
                    <input {...register('name',{ required: true })} className="mt-1 h-10 block w-full outline-none rounded-md  p-2" placeholder="yourname" type="text" id="name" />
                    {errors.name && <p className='text-red-600'>Name is required</p>}
                </div>


                <div className='emaildiv mt-1'>
                    <label htmlFor="gmail">Enter Your Gmail</label>
                    <input {...register('email',{required:true,})} className="mt-1 h-10 block w-full outline-none  rounded-md  p-2" placeholder="you@example.com" type="text" id="gmail" />
                    {errors.email && <p className='text-red-600'>gamil is required</p>}
                </div>

                <div className='password_div mt-1'>
                    <label htmlFor="password">Enter Your password</label>
                    <input   {...register("password", {
                        required: "Password is required",
                        minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long"
                        },
                        pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "Password must include uppercase, lowercase, number, and special character"
                        }
                        })}
                  className="mt-1 block h-10   w-full  rounded-md outline-none  p-2" placeholder="*******" type="password" id="password" />
                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                </div>

                <div className='phonenumber_div mt-1'>
                    <label htmlFor="phoneno">Mobile Number</label>
                    <input 
                            {...register("phoneNo", {
                                required: "Phone number is required",
                                pattern: {
                                value: /^\d{10}$/,
                                message: "Phone number must be 10 digits"
                                }
                            })}
                      className="mt-1 h-10 block w-full  rounded-md outline-none  p-2" placeholder="Enter 10 digit Phone No" id="phoneno" />
                       {errors.phoneNo && <p className='text-red-600'>{errors.phoneNo.message}</p>}
                </div>


                <div className='organization_div mt-1'>
                    <label htmlFor="organisation">Enter Your Organization Name</label>
                    <input {...register('organization',{ required: true })} className="mt-1 h-10 outline-none block w-full  rounded-md  p-2" placeholder='xyz_company pvt.ltd' type="text" id="organisation" />
                    {errors.organization && <p className='text-red-600'>Organization name  is required</p>}
                </div>

   {/* addres field*/}
              
                <div className='address_div mt-1'>
                    <label htmlFor="address">Enter Your Address</label>
                    <input {...register('address',{ required: true })}  className="mt-1 h-10 block w-full outline-none  rounded-md   p-2" type="text" id="address" />
                    {errors.address && <p className='text-red-600'>Address is required</p>}
                </div>

                <div className='city_div mt-1'>
                    <label htmlFor="city">Enter Your City</label>
                    <input {...register('city',{ required: true })}  className="mt-1 h-10  block w-full outline-none rounded-md p-2" type="text" id="city" />
                    {errors.city && <p className='text-red-600'>City name is required</p>}
                </div>

                <div className='state_div mt-1'>
                    <label htmlFor="state">Enter Your State</label>
                    <input {...register('state',{ required: true })}  className="mt-1 h-10 block w-full outline-none  rounded-md   p-2" type="text" id="state" />
                    {errors.state && <p className='text-red-600'>State name is required</p>}
                </div>

                <div className='pincode_div mt-1'>
                    <label htmlFor="pincode">Enter Your Pincode</label>
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
                   className="mt-1 block w-full h-10  rounded-md outline-none p-2" placeholder='123456' type="text" id="pincode" />
                    {errors.pincode && <p className='text-red-600'>{errors.pincode.message}</p>}
                </div>
                
              






                <div className='m-8 '>
                    <button className='w-full h-10  bg-green-600 text-white p-2 rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2'> Register</button>
                </div>

            </form>
         </div>
                  <div className='bg-white w-full h-10'>
                  </div>
  </div>
    </>
  )
}
