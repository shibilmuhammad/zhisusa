import React, { useEffect, useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { FaLock } from "react-icons/fa6";

import axios from "axios";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [isPasswordVisible,setIsPasswordVisible] = useState(false);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [errorMsg,setErrorMsg] = useState("");

  useEffect(()=>{
    const checkToken = async ()=>{
      try {

        const response = await axios.get('/api/admin/validatetoken', { withCredentials: true });
        console.log(response);
        if (response.status === 200) {
            navigate(window.history.back());
        }
    } catch (error) {
        console.error('Invalid token:', error);
    }
    }
    checkToken()
  },[])
 const handleFormSubmit = async(e)=>{
    e.preventDefault();
    if(username.trim()=="")return setErrorMsg("username cannot be empty");
    if(password.trim()=="")return setErrorMsg("password canot be empty")
    try{
      const response = await axios.post('/api/admin/login',{username,password});
      if(response.status== 200)setErrorMsg("")
      else setErrorMsg("seomthing went wrong")
      navigate('/admin')
    }catch(err){
      console.log(err);
      if (err.response && err.response.status === 400) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg('An unexpected error occurred',err.response.data.message);
      }
    }
 }
  return (
    <div class="flex min-h-[90vh] flex-col items-center justify-center  px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to Admin Panel
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleFormSubmit} class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="relative mb-2">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                onChange={(e)=>setUsername(e.target.value)}
                type="text"
                id="input-group-1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="admin@gmail.com"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="relative mb-2">
              <div className="absolute inset-y-0 start-0 flex items-center pl-3.5 pointer-events-none">
                <FaLock className="text-gray-500" />
              </div>
              <input
                  onChange={(e)=>setPassword(e.target.value)}
                type={isPasswordVisible?"text":"password"}
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
              />
              <div onClick={()=> setIsPasswordVisible(!isPasswordVisible)}  className="absolute inset-y-0 end-0 flex items-center pr-3.5  cursor-pointer">
                {isPasswordVisible? <MdOutlineVisibility />:<MdOutlineVisibilityOff />}
               
              </div>
            </div>
          </div>
          {errorMsg&&(
            <p className="text-sm text-red-600 flex justify-center">{errorMsg}</p>
          )}
          <div>
            <button
              type="submit"
              class="flex w-full select-none justify-center rounded-md bg-PrimaryBlue-normal  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0e66c5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
