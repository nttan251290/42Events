import React from 'react'

// components
import Tag from '../Tag'

// constants
import { TAG_LIST } from './constants';

// images
import NoImageFound from '../../assets/images/no-image-found.png'

export interface ItemProps {
  banner_card: string;
  medalViewImage: string;
  bestDeals: string;
  racePeriod: string;
  race_name: string;
  racePrice: string;
  [key: string]: any;
}

interface EventItemProps {
  item: ItemProps,
  hasFlag?: boolean;
  isMedalView?: boolean;
}

const EventItem: React.FC<EventItemProps> = ({
  item,
  hasFlag,
  isMedalView = false
}) => {
  return (
    <div className="component-events__item">
      <div className="component-events__item-image__wrapper">
        <img
          className="component-events__item-image"
          src={(isMedalView ? item.medalViewImage : item.banner_card) || NoImageFound}
          alt={item.race_name}
        />
        {hasFlag && (
          <>
            {item.bestDeals && (
              <span className="component-events__item-deal">
                {item.bestDeals}
              </span>
            )}
            {item.racePrice && (
              <span className="component-events__item-free">
                FREE MEDAL ENGRAVING
              </span>
            )}
          </>
        )}
      </div>
      <div className="component-events__item-image__content">
        <p className="component-events__item-title">
          {item.race_name}
        </p>
        <p className="component-events__item-date">
          {item.racePeriod}
        </p>
        <div className="component-events__item-tags">
          {TAG_LIST.map(({ mappingField, suffix = '', prefix = '' }, index) => {
            const value = item[mappingField]
            const hasValue = Array.isArray(value) ?
              !!value[0] :
              ![undefined, null, ''].includes(value)

            return hasValue && (
              <Tag key={index} suffix={suffix} prefix={prefix} value={value} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EventItem
