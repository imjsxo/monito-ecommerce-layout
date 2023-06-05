import React from 'react'
import { BiPlayCircle } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'

const ProductListPage = () => {
    return (
        <>
            <div className="product-list-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="product-list-banner d-flex justify-content-end align-items-center">
                            <div className="col-5 text-white d-flex flex-column align-items-end">
                                <h1 className='mb-0'>One more friend</h1>
                                <h3>Thousands more fun!</h3>
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
                        <div className="product-list-main d-flex">
                            <div className="side-bar">
                                <div className="title">
                                    <h3 className='mb-0'>Filter</h3>
                                </div>
                                <div className="filter-bar">
                                    <div className="category-gender">
                                        <p>Gender</p>
                                        <div class="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" />
                                            <label className="form-check-label" for="flexCheckDisabled">
                                                Male
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
                                            <label className="form-check-label" for="flexCheckCheckedDisabled">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                    <div className="category-breed">
                                        <p>Breed</p>
                                        <div class="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" />
                                            <label className="form-check-label" for="flexCheckDisabled">
                                                Small
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
                                            <label className="form-check-label" for="flexCheckCheckedDisabled">
                                                Medium
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
                                            <label className="form-check-label" for="flexCheckCheckedDisabled">
                                                Large
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-bar">
                                <div className='d-flex justify-content-between'>
                                    <div className="title">
                                        <h3>Small Dog</h3>
                                    </div>
                                    <div class="input-group flex-nowrap">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Search something here!"
                                            aria-label="Search something here!"
                                            aria-describedby="addon-wrapping" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListPage