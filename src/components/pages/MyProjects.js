import React from 'react';
import Project from './Project'
import { arr } from '../../data'
console.log("ARR>>>", arr)

export default function ProjectList() {
  return (

      <ul className="list-group">
      {arr.map((person) => (
        <Project person = {person} key = {person.name} />
      ))}
    </ul>
  )
  
}
