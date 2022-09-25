import React from 'react'
import '../App.css'

export default function Nav({ showAbout, setShowAbout, showCollectionModal, setShowCollectionModal }) {

  const handleAbout = () => {
    setShowAbout(!showAbout);
  }

  const handleCollection = () => {
    setShowCollectionModal(!showCollectionModal);
  }

  return (
    <div className='nav'>
        <h2 className='navOption' onClick={handleAbout}>About</h2>
        <h2 className='navOption' onClick={handleCollection}>Collections</h2>
        <h2 className='navOption'>Store</h2>
    </div>
  )

}
