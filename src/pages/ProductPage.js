import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { AiOutlineShareAlt,AiOutlineInstagram,AiFillYoutube } from 'react-icons/ai'
import { BsFacebook,BsChatLeftDots } from 'react-icons/bs'
import { RiTwitterFill } from 'react-icons/ri'

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
                                        <Carousel
                                            data={dataImg}
                                            width="850px"
                                            height="500px"
                                            radius="10px"
                                            slideNumber={true}
                                            captionPosition="bottom"
                                            automatic={false}
                                            dots={true}
                                            pauseIconColor="white"
                                            pauseIconSize="40px"
                                            slideBackgroundColor="darkgrey"
                                            slideImageFit="cover"
                                            thumbnails={true}
                                            thumbnailWidth="94px"
                                            thumbnailHeight="94px"
                                            style={{
                                                textAlign: "center",
                                                maxWidth: "850px",
                                                maxHeight: "500px",
                                            }}
                                        />
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
                                <p className='sku'>SKU #1000078</p>
                                <h5 className='pet-name'>Shiba Inu Sepia</h5>
                                <p className="price">34.000.000 VND</p>
                                <div className="button-contact d-flex">
                                    <button style={{width:"138px"}}>Contatc us</button>
                                    <button>
                                        <BsChatLeftDots />
                                        Chat with Monito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage