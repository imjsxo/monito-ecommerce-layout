import React from 'react'
import { BsDot } from 'react-icons/bs'

const ProductCard = () => {
    const ListProduct = [{
        image: "images/salmon-food.png",
        name: "Reflex Plus Adult Cat Food Salmon",
        category: "Dog Food",
        size: "385gm",
        price: "140.000 VND"
    },
    {
        image: "images/adult-salmon-food.png",
        category: "Cat Food",
        name: "Reflex Plus Adult Cat Food Salmon",
        size: "1.5 kg",
        price: "165.000 VND"
    },
    {
        image: "images/rope-ball.png",
        name: "Cat scratching ball toy kitten sisal rope ball",
        category: "Toy",
        size: "20 cm",
        price: "1.100.000 VND"
    },
    {
        image: "images/warm-nest.png",
        name: "Cute Pet Cat Warm Nest",
        category: "Toy",
        size: "60 cm",
        price: "410.000 VND"
    },
    {
        image: "images/salmon-oil.png",
        name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
        category: "Dog Food",
        size: "385 gm",
        price: "350.000 VND"
    },
    {
        image: "images/fashion-pet.png",
        name: "Costumes Fashion Pet Clother Cowboy Rider",
        category: "Costume",
        size: "1.5 kg",
        price: "500.000 VND"
    },
    {
        image: "images/headband.png",
        name: "Costumes Chicken Drumsti ck Headband",
        category: "Costume",
        size: "38 cm",
        price: "400.000 VND"
    },
    {
        image: "images/plush-pet-toy.png",
        name: "Plush Pet Toy",
        category: "Toy",
        size: "35 cm",
        price: "250.000 VND"
    },

    ]
    return (
        <>
            {
                ListProduct.map(product => {
                    return (<div className="col-3">
                        <div className='product-image'>
                            <img src={product.image} alt="pomeranian" className='img-fluid' />
                        </div>
                        <div className="detail">
                            <p className="name mb-1">
                                {product.name}
                            </p>
                            <div className='d-flex gap-10 category'>
                                <p className='mb-0'>Product: <strong>{product.category}</strong></p>
                                <p className='mb-0'><BsDot /> Size: <strong>{product.size}</strong></p>
                            </div>
                            <p className="price">{product.price}</p>
                            <div className='tag d-flex align-items-center '>
                                <img src="images/gift-icon.png" alt="" />
                                <p className='mb-0'><BsDot />Free Toy & Free Shaker</p>
                            </div>
                        </div>
                    </div>)
                })
            }
        </>
    )
}

export default ProductCard