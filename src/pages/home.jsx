import React from 'react'
import FeaturedWorks from '../componants/home/featuredWorks';
import MainSection from '../componants/home/mainSection';
import RecentPosts from '../componants/home/recentPosts';

const Home = () => {
  return (
    <>
      <MainSection/>
      <RecentPosts/>
      <FeaturedWorks/>
    </>
  )
}
export default Home;
