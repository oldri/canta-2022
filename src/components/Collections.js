import React from 'react'
import '../App.css'

export default function Collections({ showCollectionModal, setSelectCollection }) {
  
  const handleCollection = (collection) => {
    console.log(collection)
    setSelectCollection(collection);
  }

  return (
    <React.Fragment>
      {showCollectionModal && 
        <div className='collections'>
          <h4 className='collection' onClick={() => handleCollection("F20/")}>F20</h4>
          <h4 className='collection' onClick={() => handleCollection("W20/")}>W20</h4>
          <h4 className='collection' onClick={() => handleCollection("SS21/")}>SS21</h4>
          <h4 className='collection' onClick={() => handleCollection("F21/")}>F21</h4>{/**missing */}
          <h4 className='collection' onClick={() => handleCollection("W22/")}>W22</h4>
          <h4 className='collection' onClick={() => handleCollection("SS22/")}>SS22</h4>{/**missing */}
          <h4 className='collection' onClick={() => handleCollection("F22/")}>F22</h4>{/**missing */}
      </div>}
    </React.Fragment>
  )
}
