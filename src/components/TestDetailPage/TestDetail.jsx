import React from 'react'
import { useParams } from 'react-router-dom'

const TestDetail = () => {
    const {name} = useParams();
  return (

    <div>{name} this is my test</div>
  )
}

export default TestDetail