import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';




const MainCrosel = () => {
    const items = mainCarouselData.map((item)=> <img className='cursor-pointer' role='presentation'  src={item.image} alt=''/>)
     return(
        <div>
    <AliceCarousel
       
        items={items}
       
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    </div>
    )
     };

export default MainCrosel ;