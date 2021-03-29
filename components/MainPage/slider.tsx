import React, { useState } from 'react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import slidesData from '../../data/comments'

SwiperCore.use([Pagination, Navigation]);

class Slider extends React.Component {
  render(){
    const slides = slidesData.slice(0,3).map(slide => {
      return (
        <SwiperSlide key={slide.id}>
          <div className="comment-slide">
            <div className="comment-slide-inner">
              <img src={slide.avatar} alt={`${slide.name} про Абобу`}/>
              <div className="comment-content">
                <h3 className="primary-heading">{slide.name}</h3>
                <h4 className="primary-heading">{slide.position}</h4>
                <p className="short-comment">{slide.comment}</p>
                <Link href="comments">
                  <a className="pseudo-link">Подробнее...</a>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      )
    })

    return (
      <>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{ clickable: true }}>
          {slides}
          <span slot="container-start" id="left-pad"></span>
          <span slot="container-start" id="right-pad"></span>
        </Swiper>
      </>
    )
  }
}

export default class slider extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return (
      <div id="slider-outer">
        <div id="slider-wrapper">
          <Slider />
        </div>
      </div>
    )
  }
}