import React from 'react';
import { useSelector  } from 'react-redux';

const Home = () => {
  const data=useSelector(state=>state)
  console.log(data.obj)

  return (
    <div>
<h1>USER INFORMATION</h1>
<p>Name: {data.obj.name}</p>
<p>Email:{data.obj.email}</p>
<p>Password:{data.obj.password}</p>
<p>Photo:  <img src={data.obj.avatar} alt="" />  </p>

    </div>
  )
}

export default Home