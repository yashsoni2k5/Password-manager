import React, { useEffect, useState } from 'react'
 
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
 
const Manager = () => {


const [form, setform] = useState([{site : "", username :"",password:""}])
const [passwords, setpasswords] = useState([])

useEffect(() => {
   let password = localStorage.getItem("passwords")
   if(password){
    setpasswords(JSON.parse(password))
    
   }
   
}, [])



const handleChange = (e) => { 
  setform({...form,[e.target.name]:e.target.value})

 }

 const savePassword = () => { 
  
  setpasswords([...passwords,form])
 localStorage.setItem("passwords",JSON.stringify([...passwords,form]))
  
  
  
  }

  return (
    <div>
      
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

    </div>
    <div className=" mx-auto mt-10 bg-slate-200 max-w-4xl">
        
    <div className="logo font-semibold text-2xl text-center">
         <span>  &lt; </span>
        
        pass<span className='text-green-800 font-bold'>OP/&gt;</span>
        
        </div>
        <p className='text-center text-green-800 text-md'> your won password manager</p>
    <div className='flex flex-col p-4 gap-3 items-center '>
        <input value={form.site} onChange={handleChange} placeholder='enter website url' className='rounded-full w-full border-green-500 border p-4 py-1 text-black' type="text" name='site' />
       <div className='flex justify-between gap-8'>
        <input value={form.username} onChange={handleChange} placeholder='enter username ' className='rounded-full w-full border-green-500 border p-4 py-1 text-black' type="text" name='username' />
        <input value={form.password} onChange={handleChange} placeholder='enter password' className='rounded-full w-full border-green-500 border p-4 py-1 text-black' type="text" name='password' />
       </div>
       <button onClick={savePassword} className='bg-green-600 w-fit p-3 rounded-full hover:bg-green-500 font-semibold text-white border border-green-400'>add password </button>
    </div>
    <div className='font-bold  p-4 py-2'>your passwords </div>

   {passwords.length === 0 ? <div>no password to show </div>: <table className="table-auto w-full">
  <thead className='text-center bg-green-600'>
    <tr>
      <th>website url</th>
      <th>username</th>
      <th>password</th>
    </tr>
  </thead>
  <tbody>
   
   {passwords.map((items,i)=>{
    return <tr>
    
    <td className='text-center'>{items.site}</td>
     <td className='text-center'> {items.username}</td>
     <td className='text-center'>{items.password}</td>

     
   </tr>
   })}
   
  </tbody>
</table>}
    
   
    </div>
    </div>
  )
}

export default Manager