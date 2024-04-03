import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from './Instance'

export default function Banner({fetchUrl}) {

    const [movieBanner,setBanner] = useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

const fetchData = async () =>{
    const{data} = await instance.get(fetchUrl)
    setBanner(data.results[Math.floor(Math.random()*data.results.length)]);
}
console.log(movieBanner)
 useEffect(()=>{
    fetchData()
 },[]); 

  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movieBanner?.backdrop_path})`, backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}}>

   <div className="banner-content">
    <h1>{movieBanner?.name}</h1>
    <button className='btn btn-danger btn-lg'>Play <i class="fa-solid fa-caret-right"></i></button>
    <button className='btn btn-outline-light ms-3 btn-lg'>More Info <i class="fa-solid fa-caret-down"></i> </button>
    <h2>{movieBanner?.overview?.slice(0,150)}...</h2>
   </div>

    </div>
  )
}

