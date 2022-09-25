import React from 'react'
import '../App.css'

export default function Card({ index, image }) {
  return (
    <img key={index} src={image} className='card'/>
  )
}
