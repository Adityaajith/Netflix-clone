import React, { useEffect } from 'react'
import {API_KEY} from '../../constants/constant'
import axios from '../../axios'
import "./Banner.css"
function Banner() {
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0]) 
    }) 
    }, [])
  return (
    <div className='banner'>
     <div className='content'>
    <h1 className='title'>HOUSE OF DRAGON</h1>
        <div className='banner_buttons'>
            <button className='button' >play</button>
            <button className='button' >My List</button>
        </div>
        <h1 className='description'>The prequel series finds the Targaryen dynasty at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires—real and imagined—crumble from such heights. In the case of the Targaryens, their slow fall begins almost 193 years before the events of Game of Thrones, when King Viserys Targaryen breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.</h1>
    </div>
    <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
