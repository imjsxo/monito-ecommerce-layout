import React from 'react'

const BlogCard = (props) => {    
    return (
        <>
            {
                props.Listblog.map(blog => {
                    return (
                        <div className="col-4">
                            <div className="blog-image">
                                <img src={blog.image} className='img-fluid' />
                            </div>
                            <div className="detail">
                                <p className="tag">Pet Knowledge</p>
                                <h5 className="title">{blog.title}</h5>
                                <p className='content'>{blog.content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default BlogCard