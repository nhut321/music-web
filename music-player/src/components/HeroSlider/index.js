import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import sliderItem from '../../assets/image/hero-slider.jpg'

import 'swiper/css'

import './HeroSlider.css'

export default function HeroSlider({item}) {

	return (
		<div className="hero-slider">
			<Swiper
		      spaceBetween={50}
		      slidesPerView={3}
		      loop={true}
		    >
		    	{
		    		item?.items?.map((v,i) => {
		    			return (
							<SwiperSlide key={i}>
								<div className="hero-slider__item">
									<a href="#">
										<img src={v.banner} alt='slider'/>
									</a>
								</div>
							</SwiperSlide>
		    			)
		    		})
		    	}

	    	</Swiper>
		</div>
	)
}