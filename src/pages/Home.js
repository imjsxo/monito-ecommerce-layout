import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import PetListCard from '../components/PetListCard'
import ProductCard from '../components/ProductCard'
import BlogCard from '../components/BlogCard'

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="home-top-banner">
                <div className="banner-content">
                  <h1>One More Friend</h1>
                  <h2 style={{ marginBottom: '24px' }}>Thousands More Fun!</h2>
                  <p style={{ marginBottom: '34px' }}>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                  <div className='d-flex gap-20'>
                    <button className='button-view'>
                      View Intro
                      <BiPlayCircle className='ml-1' />
                    </button>
                    <button className='button-explore'>Explore Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className='pet-list-title d-flex align-items-center justify-content-between'>
                <div>
                  <h5>Whats new?</h5>
                  <h3>Take A Look At Some Of Our Pets</h3>
                </div>
                <div>
                  <button>
                    View more
                    <MdKeyboardArrowRight />
                  </button>
                </div>
              </div>
              <div className='pet-card-wrapper d-flex flex-wrap justify-content-center'>
                <PetListCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 second-banner-wrapper">
              <div className='col-5 second-banner-content d-flex flex-column'>
                <h2>One more friend</h2>
                <h4>Thousands more fun!</h4>
                <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                <div className='d-flex gap-20'>
                  <button className='button-view'>
                    View Intro
                    <BiPlayCircle className='ml-1' />
                  </button>
                  <button className='button-explore'>Explore Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className='product-card-title d-flex align-items-center justify-content-between'>
                <div>
                  <h5>Hard to choose right products for your pets?</h5>
                  <h3>Our Products</h3>
                </div>
                <div>
                  <button>
                    View more
                    <MdKeyboardArrowRight />
                  </button>
                </div>
              </div>
              <div className='product-card-wrapper d-flex flex-wrap justify-content-center'>
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center list-seller-title">
              <div>
                <p className='mb-0'>
                  Proud to be part of
                  <strong> Pet Sellers</strong>
                </p>
              </div>
              <div>
                <button>
                  View all our sellers
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-between align-items-center list-seller-logo">
              <div className='col-md-1'>
                <img src="images/logo-1.png" alt="" />
              </div>
              <div className='col-md-1'>
                <img src="images/logo-2.png" alt="" />
              </div>
              <div className='col-md-1'>
                <img src="images/logo-3.png" alt="" />
              </div>
              <div className='col-md-1'>
                <img src="images/logo-4.png" alt="" />
              </div>
              <div className='col-md-1'>
                <img src="images/logo-5.png" alt="" />
              </div>
              <div className='col-md-1'>
                <img src="images/logo-6.png" alt="" />
              </div>
              <div className='col-md-1'>
                <img src="images/logo-7.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-6">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 third-banner-wrapper">
              <div className='col-5 third-banner-content d-flex flex-column'>
                <div className="d-flex align-items-center">
                  <h2 className='mb-0'>Adoption</h2>
                  <img src="images/paw-logo.png" alt="" />
                </div>
                <h4>We need help. so do they.</h4>
                <p>Adopt a pet and give it a home, <br />
                  it will be love you back unconditionally.</p>
                <div className='d-flex gap-20 py-4'>
                  <button className='button-explore'>Explore Now</button>
                  <button className='button-view'>
                    View Intro
                    <BiPlayCircle className='ml-1' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-7">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className='blog-card-title d-flex align-items-center justify-content-between'>
                <div>
                  <h5>You already know ?</h5>
                  <h3>Useful pet knowledge</h3>
                </div>
                <div>
                  <button>
                    View more
                    <MdKeyboardArrowRight />
                  </button>
                </div>
              </div>
              <div className='blog-card-wrapper d-flex flex-wrap justify-content-center'>
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home