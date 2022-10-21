import React from 'react'
import { Navigate, navigate } from 'react-router-dom'

const ProtectedRoute = ({children,user}) => {
    if(!user){
        return <Navigate to='/'/>
    }
    return children;
}

export default ProtectedRoute