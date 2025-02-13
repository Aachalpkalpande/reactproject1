import React from 'react'
import UserLogin from './UserLogin'
import GuestLogin from './GuestLogin'

export default function Sign_UpComponent(props) {

    if(props.isLogin)
        {
  return <UserLogin/>
    }
    return<GuestLogin />

    return(
        <>
        {(props.isLogin)?<UserLogin/> : <GuestLogin />}
        
        </>

    )
   }  