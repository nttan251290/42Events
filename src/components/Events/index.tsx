import React from 'react'

// components
import Slider from 'react-slick'
import EventItem, { ItemProps } from './EventItem'

// styles
import './Events.scss'

interface EventsProps {
  title: string;
  data: ItemProps[]
}

const SETTTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      adaptiveHeight: true,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Events: React.FC<EventsProps> = ({ title, data }) => {
  return (
    <div className="component-events">
      <div className="component-events__inner">
        <h3 className="component-events__title">{ title }</h3>
        <Slider className="component-events__content" {...SETTTINGS}>
          {data.map((item, index) => (
            <EventItem key={index} item={item} hasFlag />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Events
