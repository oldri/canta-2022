import React from 'react'
import '../App.css'
import Card from './Card'
import useCollection from '../hooks/useCollection'

export default function Cards({ selectCollection }) {
  const [ allImages ] = useCollection(selectCollection);

  return (
    <div className='cards'>
     {allImages.map((image, index) => (
        <Card key={index} image={image}/>
      ))}
    </div>
  )
}
