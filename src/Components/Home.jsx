import React from 'react'
import Slider from './Slider'
import CategorySlider from './CategorySlider'
import TrendingSection from './Trending'
import MoreToExplore from './Moretoexplore'
import StyledByYou from './Styledbyyou'
import Newinrounded from './Newinrounded'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Newinrounded/>
<CategorySlider/>
<TrendingSection/>
<StyledByYou/>
<MoreToExplore/>


    </div>
  )
}

export default Home
