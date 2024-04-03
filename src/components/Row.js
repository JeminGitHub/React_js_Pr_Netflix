import React, { useEffect, useState } from 'react'
import instance from './Instance'
import './Row.css'
function Row({title,fetchUrl,is_poster}) {

  const [allMovie,setallMovie] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async ()=>{
    const {data} = await instance.get(fetchUrl)
    // const {results} = data
    // console.log(results)
    // console.log(data.results)
    setallMovie(data.results);
  }

  console.log(allMovie)
  useEffect(() => {
    fetchData()   
  }, []);

  return (
    <div div className='row'>
     <h1 className='mt-3'>{title}</h1>
     <div className='movie-row'>
     {
      allMovie?.map(item=>(
        <img className='movie-img'src={`${base_url}${is_poster?item.poster_path:item.backdrop_path}`} alt='no image'/>
      ))
     }

     </div>
    </div>
  )
}

export default Row
