import React from 'react'

// components
import Slider from 'react-slick'

// types
import { ItemProps } from '../Events/EventItem'

// styles
import './Banner.scss'

interface BannerProps {
  data: ItemProps[]
}

const SETTTINGS = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <Slider className="component-banner" {...SETTTINGS}>
      {data.map((item, index) => (
        <div key={index} className="component-banner__item">
          <img
            className="component-banner__item-image"
            src={item.banner_card}
            alt={item.race_name}
          />
        </div>
      ))}
    </Slider>
  )
}

export default Banner
