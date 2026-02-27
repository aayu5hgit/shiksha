import Header from './../MyComponents/Header';       
import Doughnut from './../MyComponents/Chart';  
import {useState, useEffect} from 'react';
import axios from 'axios'     

export default function Profile() {
 
     const [ip,setIP] = useState('');
  //creating function to load ip address from the API
  const getData = async()=>{
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data);
      setIP(res.data.IPv4)
  }
  
  useEffect(()=>{
      //passing getData method to the lifecycle method
      getData()
  },[])
  return (
    
    <>
    <Header/>
    <div class="h-full p-12 bg-[#0d1117]  flex flex-wrap items-center justify-center">
  <div class="container max-w-lg bg-[#161b22] rounded shadow-lg transform duration-200 easy-in-out m-12">
    <div class="h-2/4 sm:h-64  overflow-hidden">
      <img class="w-full rounded-md "
        src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpdGh1YnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Cover" />
    </div>
    <div class="flex justify-start px-5 -mt-12 mb-5">
      <span clspanss="block relative h-32 w-32">
        <img alt="Profile"
          src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpdGh1YnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
      </span>
    </div>
    <div class="">
      <div class="px-7 mb-8">
        <h2 class="text-3xl font-bold text-white dark:text-gray-300">Your Public IP</h2>
        <p class="text-[#abacad] mt-2 text-xl dark:text-gray-400">{ip}</p>
        
      </div>
    </div>
    <Doughnut/>

  </div>
</div>
    {/* <div className="overflow-hidden bg-gray-500 shadow">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-xl font-semibold leading-6 text-white">Your Profile</h2>
        <h3 className="mt-1 max-w-2xl text-m text-gray-300">Personal Details and Information</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-m font-medium text-gray-500">Your Public IP</dt>
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">{ip}</dd>
          </div>
          
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-m font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">email@example.com</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-m font-medium text-gray-500">Role</dt>
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">Student</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-m font-medium text-gray-500">Disability Type</dt>
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">Visually Impaired</dd>
          </div>
        </dl>
      </div>
    </div> */}
    </>
  )
}