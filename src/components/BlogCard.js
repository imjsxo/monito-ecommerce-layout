import React from 'react'

const BlogCard = () => {
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
    }

    ]
    return (
        <>
            {
                Listblog.map(blog => {
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