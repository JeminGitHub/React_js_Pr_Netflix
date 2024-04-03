import React, { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {

  const[show, setShow] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){
        setShow(true)
      }else{
        setShow(false)
      }
    })
  })

  return (
    <div className={`${show && 'nav-bg'} nav`}>
      <img width={'200px'} src='https://static.vecteezy.com/system/resources/previews/019/956/187/non_2x/netflix-transparent-netflix-free-free-png.png' alt='no image'/>
    </div>
  )
}
