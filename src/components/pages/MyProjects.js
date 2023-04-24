import React from 'react';
import Project from './Project'
import { arr } from '../../data'
console.log("ARR>>>", arr)

export default function ProjectList() {
  return (

      <ul className="list-group">
      {arr.map((project) => (
        <Project project = {project} key = {project.name} />
      ))}
    </ul>
  )
  
}
