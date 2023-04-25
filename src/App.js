import React from 'react';
import getImageUrl from './getImageUrl';
import './App.css';

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img 
      className='avatar'
      src={getImageUrl(imageId)}
      alt={name}
      width={imageSize}
      height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li><b>Awards: {awards.length}</b> ({awards.join(", ")})</li>
        <li><b>Discovered:</b> {discovery}</li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
      imageId= "szV5sdG"
      name= "Maria Sklodowska-Curie"
      profession= "Physicist and Chemist"
      discovery= "Poloniun (chemical element)"
      awards = {[
        "Noble prize in Physics",
        "Noble prize in Chemistry",
        "Davy Medal",
        "Matteucci Medal"
      ]}
      />
      <br />
      <Profile 
      imageId="YfeOqp2"
      name= "Katsuko Saruhashi"
      profession= "Geochemist"
      discovery= "A method for measuring carbon dioxide in seawater"
      awards= {[
        "Miyake prize for Geochemistry",
        "Tanaka prize"
      ]}
      />
    </div>
  )
}
