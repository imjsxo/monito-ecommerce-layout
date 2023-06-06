import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import PetListCard from '../components/PetListCard'
import ProductCard from '../components/ProductCard'
import BlogCard from '../components/BlogCard'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listPet: [{
        image: "images/Pomeranian-White.png",
        name: "Pomeranian White",
        gender: "Male",
        age: "3",
        price: "6900000"
      },
      {
        image: "images/poodle-yellow.png",
        name: "Poodle Tiny Yellow",
        gender: "Female",
        age: "4",
        price: "3900000"
      },
      {
        image: "images/poodle-sepia.png",
        name: "Poodle Tiny Sepia",
        gender: "Male",
        age: "1",
        price: "4000000"
      },
      {
        image: "images/malamute-grey.png",
        name: "Alaskan Malamute Grey",
        gender: "Male",
        age: "8",
        price: "8900000"
      },
      {
        image: "images/corgi-cream.png",
        name: "Pembroke Corgi Cream",
        gender: "Male",
        age: "7",
        price: "7900000"
      },
      {
        image: "images/corgi-tricolor.png",
        name: "Pembroke Corgi Tricolor",
        gender: "Female",
        age: "5",
        price: "6900000"
      },
      {
        image: "images/powe-cow.png",
        name: "Pomeranian White",
        gender: "Female",
        age: "5",
        price: "6500000"
      },
      {
        image: "images/Pomeranian-White.png",
        name: "Poodle Tiny Dairy Cow",
        gender: "Male",
        age: "4",
        price: "5000000"
      }]
    };
    this.sortAz = this.sortAz.bind(this)
    this.sortZa = this.sortZa.bind(this)
    this.priceHightoLow = this.priceHightoLow.bind(this)
    this.priceLowtoHigh = this.priceLowtoHigh.bind(this)
    this.byAge = this.byAge.bind(this)
    this.byMale = this.byMale.bind(this)
    this.byFemale = this.byFemale.bind(this)
  }

  sortAz() {
    const list = this.state.listPet
    list.sort(function (a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    this.setState({ listPet: list })
  }

  sortZa() {
    const listZa = this.state.listPet
    listZa.sort(function (a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
    });
    this.setState({ listPet: listZa })
  }

  priceHightoLow() {
    const listHighLow = this.state.listPet
    listHighLow.sort(function (a, b) {
      return b.price - a.price;
    });
    this.setState({ listPet: listHighLow })
  }

  priceLowtoHigh() {
    const listLowHigh = this.state.listPet
    listLowHigh.sort(function (a, b) {
      return a.price - b.price;
    });
    this.setState({ listPet: listLowHigh })
  }

  byAge() {
    const listByAge = this.state.listPet
    listByAge.sort(function (a, b) {
      return a.age - b.age;
    });
    this.setState({ listPet: listByAge })
  }

  byMale() {
    const textMale = "Male";
    const listByMale = this.state.listPet.filter(val => val.gender.includes(textMale));
    this.setState({ listPet: listByMale })
  }

  byFemale() {
    const textFemale = "Female";
    const listByFemale = this.state.listPet.filter(val => val.gender.includes(textFemale));
    this.setState({ listPet: listByFemale })
    console.log("HASIL", listByFemale)
  }

  render() {
    const Listblog = [{
      image: "images/blog-1.png",
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      content: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."
    },
    {
      image: "images/blog-2.png",
      title: "Dog Diet You Need To Know",
      content: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
    },
    {
      image: "images/blog-3.png",
      title: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      content: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog."
    }]
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
                <div className='button-sort'>
                  <button onClick={this.sortAz}>By Alphabet A-Z</button>
                  <button onClick={this.sortZa}>By Alphabet Z-A</button>
                  <button onClick={this.priceLowtoHigh}>By Price Low-High</button>
                  <button onClick={this.priceHightoLow}>By Price High-Low</button>
                  <button onClick={this.byAge}>By Age</button>
                  <button onClick={this.byMale}>Male</button>
                  <button onClick={this.byFemale}>Female</button>
                </div>
                <div className='pet-card-wrapper d-flex flex-wrap justify-content-center'>
                  <PetListCard listPet={this.state.listPet} />
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
                  <BlogCard Listblog={Listblog} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Home;