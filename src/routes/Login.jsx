import React, { useState } from 'react'
import { instance } from '../api/axios';
import { useDispatch } from 'react-redux';


const Login = () => {
 const dispatch=useDispatch()
const[loginData,setloginData]=useState({name:"",email:"",password:"",avatar:""})
function LoginUser(e){
e.preventDefault()
let isFetching=true
async function sendLogindata(){
  try {
    let response= await instance.post("/users/",loginData)
    let user=response.data
console.log(response.data)
if(response){
  dispatch({user,type:"USER_DATA"})
}


  }catch(err){
    console.log(err)
  }


  return ()=>{
    isFetching=false
  }
}
sendLogindata()
console.log(loginData)

}
  return (
    <div>
<form  className='login-form' onSubmit={LoginUser}  >
  <label htmlFor="name">Name</label>
<input type="text"  placeholder='Your name'  id='name' onChange={e=> setloginData({name:e.target.value, email:loginData.email,password:loginData.password,avatar:loginData.avatar  })}   />
<label htmlFor="email">Email</label>
<input type="email" placeholder='Your email' id='email'  onChange={e=> setloginData({name:loginData.name, email:e.target.value,password:loginData.password,avatar:loginData.avatar  })} />
<label htmlFor="password">Password</label>
<input type="password" placeholder='Your password' id='password' maxLength={8} autoComplete='curren-password'   onChange={e=> setloginData({name:loginData.name, email:loginData.email,password:e.target.value,avatar:loginData.avatar  })}  />
<label htmlFor="avatar">Avatar</label>
<input type="text"  placeholder='Your avatar' id='avatar'  onChange={e=> setloginData({name:loginData.name, email:loginData.email,password:loginData.password,avatar:e.target.value  })} />

<button type="submit">Create</button>





</form>



    </div>
  )
}

export default Login