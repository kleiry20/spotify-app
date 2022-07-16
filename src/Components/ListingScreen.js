import React from 'react'
import {TopSongs} from "./TopSongs";

export const ListingScreen = (props) => {
  return (
    <div className='container'>
      { props.songs.map((songs)=>{
        return <TopSongs songs={songs}/>
      })}    
      
    </div>
  )
}
