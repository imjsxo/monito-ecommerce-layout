import React from 'react'
import { BsDot } from 'react-icons/bs'

const PetListCard = () => {
  const listPet = [{
    image: "images/Pomeranian-White.png",
    name: "MO231 - Pomeranian White",
    gender: "Male",
    age: "02 Months",
    price: "6.900.000 VND"
  },
  {
    image: "images/poodle-yellow.png",
    name: "MO502 - Poodle Tiny Yellow",
    gender: "Female",
    age: "02 Months",
    price: "3.900.000 VND"
  },
  {
    image: "images/poodle-sepia.png",
    name: "MO102 - Poodle Tiny Sepia",
    gender: "Male",
    age: "02 Months",
    price: "4.000.000 VND"
  },
  {
    image: "images/malamute-grey.png",
    name: "MO512 - Alaskan Malamute Grey",
    gender: "Male",
    age: "02 Months",
    price: "8.900.000 VND"
  },
  {
    image: "images/corgi-cream.png",
    name: "MO231 - Pembroke Corgi Cream",
    gender: "Male",
    age: "02 Months",
    price: "7.900.000 VND"
  },
  {
    image: "images/corgi-tricolor.png",
    name: "MO502 - Pembroke Corgi Tricolor",
    gender: "Female",
    age: "02 Months",
    price: "6.900.000 VND"
  },
  {
    image: "images/powe-cow.png",
    name: "MO231 - Pomeranian White",
    gender: "Female",
    age: "02 Months",
    price: "6.500.000 VND"
  },
  {
    image: "images/Pomeranian-White.png",
    name: "MO512 - Poodle Tiny Dairy Cow",
    gender: "Male",
    age: "02 Months",
    price: "5.000.000 VND"
  }]
  return (
    <>
      {
        listPet.map(pet => {
          return (<div className="col-3">
            <div className='pet-image'>
              <img src={pet.image} alt="pomeranian" className='img-fluid' />
            </div>
            <div className="detail">
              <p className="name mb-1">
                {pet.name}
              </p>
              <div className='d-flex gap-10 genre'>
                <p className='mb-0'>Genre: <strong>{pet.gender}</strong></p>
                <p className='mb-0'><BsDot /> Age: <strong>{pet.age}</strong></p>
              </div>
              <p className="price">{pet.price}</p>
            </div>
          </div>)
        })
      }
    </>
  )
}

export default PetListCard