import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

     const params =  useParams()
        console.log(params);
        
  return (
    <div>
      <h1> {params.CourseId} Course Detail</h1>
    </div>
  )
}

export default CourseDetail
