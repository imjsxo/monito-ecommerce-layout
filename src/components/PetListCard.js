import React from 'react'
import { BsDot } from 'react-icons/bs'

const PetListCard = (props) => {
  return (
    <>
      {
        props.listPet.map(pet => {
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