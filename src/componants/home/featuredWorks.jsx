import React,{useState} from 'react'
import {data} from '../common/data'
const  FeaturedWorks = () => {
    const [screenWidth, setScreenWidth]   = useState(window.innerWidth);
  return (
    <>
        <section >
            <div className="md:container md:mx-auto">
                <div className="flex justify-center py-6 ">
                    <div className="w-11/12 lg:w-10/12 ">
                        <div className='flex justify-center sm:justify-between align-center mb-3'>
                            <h2 className='text-heading4 text-dark'>Featured works</h2>
                        </div>
                       
                        {data.featureWorkList.map((post,i) => (
                            <>
                            {i === 0 ? 
                                <div className="flex  justify-between align-top   flex-wrap sm:flex-nowrap mb-8 pb-4 border-b  border-gray" key={i}>
                                    <div className="mb-3 image-254" >
                                        <img src={post.imageUrl} className="image-254"/>
                                    </div>  
                                    <div className='bg-white  px-0 sm:px-5'>
                                        <h3 className='text-2xl sm:text-heading2 text-dark font-bold mb-2'>{post.title}</h3>
                                        <span className='text-dark-70  text-xl mb-2 inline-block'><span className='bg-secondary text-lg text-white font-bold px-2 rounded-3xl mr-5'>{post.year}</span> <span>{post.module}</span>  </span>
                                        <p className='text-dark text-base'>{post.content}</p>
                                    </div>
                                </div>
                            :<>
                                {screenWidth > 640 &&
                                    <div className="flex justify-between align-top   flex-wrap sm:flex-nowrap mb-8 pb-4 border-b border-gray" key={i}>
                                        <div className="mb-3 image-254" >
                                            <img src={post.imageUrl} className="image-254"/>
                                        </div>  
                                        <div className='bg-white  px-0 sm:px-5'>
                                            <h3 className='text-2xl sm:text-heading2 text-dark font-bold mb-2'>{post.title}</h3>
                                            <span className='text-dark-70  text-xl mb-2 inline-block'><span className='bg-secondary text-lg text-white font-bold px-2 rounded-3xl mr-5'>{post.year}</span> <span>{post.module}</span>  </span>
                                            <p className='text-dark text-base'>{post.content}</p>
                                        </div>
                                    </div>
                                }
                            </>
                        }
                           </>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FeaturedWorks;
