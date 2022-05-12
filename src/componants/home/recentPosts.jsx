import React from 'react'
import {data} from '../common/data'
const  RecentPosts = () => {
  return (
    <>
        <section className='bg-light'>
            <div className="md:container md:mx-auto">
                <div className="flex justify-center pt-6 pb-8 ">
                    <div className="w-11/12 lg:w-10/12 ">
                        <div className='flex justify-center sm:justify-between align-center mb-3'>
                            <h2 className='text-heading4 text-dark'>Recent posts</h2>
                            <a href="" className='text-link text-base  mt-1 hidden sm:inline'>View all</a>
                        </div>
                        <div className="flex justify-between gap-6  flex-wrap-reverse sm:flex-nowrap">
                        {data.recentPostsList && data.recentPostsList.map((post,i) => (
                                <div className="w-full md:w-6/12" key={i}>
                                    <div className='bg-white  p-4 sm:p-5'>
                                        <h3 className='text-heading4 sm:text-heading3 text-dark font-bold mb-3'>{post.title}</h3>
                                        <span className='text-dark text-lg mb-2 inline-block'>{post.postDate} | {post.author} </span>
                                        <p className='text-dark text-base'>{post.postContent}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default RecentPosts;
