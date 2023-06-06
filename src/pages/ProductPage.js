import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { AiOutlineShareAlt, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsFacebook, BsChatLeftDots } from 'react-icons/bs'
import { RiTwitterFill } from 'react-icons/ri'
import Slider from "react-slick";
import PetListCard from '../components/PetListCard';

const ProductPage = () => {
    const dataImg = [
        {
            image: "images/shiba-1.png"
        },
        {
            image: "images/shiba-2.jpg"
        },
        {
            image: "images/shiba-3.webp"
        },
        {
            image: "images/shiba-4.jpg"
        },
        {
            image: "images/shiba-5.webp"
        },
        {
            image: "images/shiba-6.jpg"
        },
    ];

    return (
        <>
            <div className="product-page-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="pet-detail d-flex">
                            <div className="col-6">
                                <div className="pet-image-wrapper">
                                    <div>
                                        <img src="images/shiba-1.png" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/logo-112.png" className='logo-discount img-fluid' alt="logo" />
                                    </div>
                                    <div className='d-flex social-media'>
                                        <p>
                                            <AiOutlineShareAlt />
                                            Share:
                                        </p>
                                        <div className="logo-social-media d-flex">
                                            <BsFacebook />
                                            <RiTwitterFill />
                                            <AiOutlineInstagram />
                                            <AiFillYoutube />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <p className='sku mb-1'>SKU #1000078</p>
                                <h5 className='pet-name mb-1'>Shiba Inu Sepia</h5>
                                <p className="price">34.000.000 VND</p>
                                <div className="button-contact d-flex">
                                    <button style={{ width: "138px", marginRight: "20px" }}>Contatc us</button>
                                    <button style={{ width: "200px" }}>
                                        <BsChatLeftDots />
                                        Chat with Monito
                                    </button>
                                </div>
                                <div className='pet-desc'>
                                    <table>
                                        <tr>
                                            <td className='table-1'>SKU</td>
                                            <td className='table-2'>: #1000078</td>
                                        </tr>
                                        <tr>
                                            <td className='table-1'>Gender</td>
                                            <td className='table-2'>: Female</td>
                                        </tr>
                                        <tr>
                                            <td className='table-1'>Age</td>
                                            <td className='table-2'>: 2 Months</td>
                                        </tr>
                                        <tr>
                                            <td className='table-1'>Size</td>
                                            <td className='table-2'>: Small</td>
                                        </tr>
                                        <tr>
                                            <td className='table-1'>Color</td>
                                            <td className='table-2'>: Appricot & Tan</td>
                                        </tr>
                                        <tr>
                                            <td className='table-1'>Vaccinated</td>
                                            <td className='table-2'>: Yes</td>
                                        </tr>
                                        <tr>
                                            <td className='table-1'>Dewormed</td>
                                            <td className='table-2'>: Yes</td>
                                        </tr>
                                        <tr>
                                            <td className='table-1'>Cert</td>
                                            <td className='table-2'>: Yes (MKA)</td>
                                        </tr>
                                        <tr>
                                            <td className='table-1'>Microchip</td>
                                            <td className='table-2'>: Yes</td>
                                        </tr>
                                        <tr>
                                            <td className='table-1'>Location</td>
                                            <td className='table-2'>: Vietnam</td>
                                        </tr>
                                        <tr>
                                            <td>Published Date</td>
                                            <td>: 12-Oct-2022</td>
                                        </tr>
                                        <tr>
                                            <td>Additional Information</td>
                                            <td>: Pure breed Shih Tzu.<br />
                                                Good body structure.<br />
                                                With MKA cert and Microchip.<br />
                                                Father from champion lineage.</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <div className='customer-image'>
                            <h3 className="title mb-3">
                                Our lovely customer
                            </h3>
                            <div>
                                <Slider>
                                    <div>
                                        
                                    </div>
                                    <div>
                                        <img src="images/customer2.png" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/customer3.png" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/customer4.png" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/customer1.png" alt="" />
                                    </div>
                                    <div>
                                        <img src="images/customer2.png" alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div> */}
                        <div className='pet-list-title d-flex align-items-center justify-content-between'>
                            <div>
                                <h5>Whats new?</h5>
                                <h3>See more puppies</h3>
                            </div>
                        </div>
                        {/* <div className='pet-card-wrapper d-flex flex-wrap justify-content-center'>
                            <PetListCard />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage