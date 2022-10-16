import React from 'react'
import '../App.css'

export default function Nav({ showAbout, setShowAbout, showCollectionModal, setShowCollectionModal, showNewsModal, setShowNewsModal }) {

  const handleAbout = () => {
    setShowAbout(!showAbout);
  }

  const handleCollection = () => {
    setShowCollectionModal(!showCollectionModal);
  }

  const handleNews = () => {
    setShowNewsModal(!showNewsModal);
  }

  return (
    <div className='nav'>
        <h2 className='navOption' onClick={handleAbout}>About</h2>
        <h2 className='navOption' onClick={handleCollection}>Collections</h2>
        <h2 className='navOption' onClick={handleNews}>News</h2>
        {/* <h2 className='navOption'>Store</h2> */}
    </div>
  )

}
