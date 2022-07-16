import React from 'react'

export const TopSongs = ({songs}) => {
  return (
    <>
        <h4 className='text-start' >Top Songs List</h4>
        <h3>{songs.song}</h3>
        <p>{songs.artists}</p>

    </>
  )
}
