import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import View from '../components/View'

const Dashboard = () => {
   const [username, setUsername] = useState("")
   useEffect(()=>{
    if(sessionStorage.getItem("user")){
      setUsername(JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0])
    }
   },[])
  return (
    <>
      <Header insideDashboard={true}/>
      <div className="container-fluid  p-5">
        <div className="row mt-5">
          <div className="col-lg-8 mt-5">
            <h2>Welcome <span className='text-warning'>{username}</span>,</h2>
            <View/>
          </div>
          <div className="col-lg-4">
            <Profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard