import React from 'react'
import { useLocation } from 'react-router'

const Breadcrumb = ({className}) => {

    let location = useLocation()
    let locationPath = location.pathname.split("/")

  return (
    <div className={`${className} flex gap-2 text-[14px] font-pop font-normal text-[#3736367b]`}>
      <h2>Home</h2>
      <h2>/</h2>
      <h2>{locationPath}</h2>
    </div>
  )
}

export default Breadcrumb
