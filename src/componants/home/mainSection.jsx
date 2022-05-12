import React from 'react'
import {data} from '../common/data'
const  MainSection = () => {
  return (
    <>
        {data.user.map((user,i) => (
            <div className="md:container md:mx-auto" key={i}>
                <div className="flex justify-center  pb-10 pt-5  sm:pt-20">
                    <div className="w-11/12 lg:w-10/12 ">
                        <div className="flex justify-between  flex-wrap-reverse sm:flex-wrap">
                            <div className="w-full sm:w-8/12 lg:w-8/12 xl:w-8/12 text-center sm:text-left">
                                <h1 className='text-3xl leading-8  text-dark lg:text-5xl lg:leading-10 font-bold mb-4 '>Hi, I am {user.name},<br/>{user.role}</h1>
                                <p className='text-base text-dark mb-4'>{user.summery}</p>
                                <a href={user.resumelink} className='inline-flex align-center px-5 py-3 mt-2  text-base  font-medium text-white bg-primary hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-indigo-500' download>Download Resume</a>
                            </div>
                            <div className="w-full sm:w-4/12 lg:w-4/12 xl:w-3/12 text-center">
                                <img src={user.avator} alt="" className='inline mb-4' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}
export default MainSection;
