import React, { useState, useMemo } from 'react'

// components
import { Switch } from 'antd'
import EventItem, { ItemProps } from './EventItem'

// styles
import './EventResults.scss'

interface EventResultsProps {
  totalData: number
  data: ItemProps[]
}

const EventResults: React.FC<EventResultsProps> = ({ totalData, data }) => {
  const [isMedalView, setMedalView] = useState<boolean>(false)

  const totalDataText = useMemo(() => {
    if (!totalData) {
      return 'No result found.'
    }

    return totalData > 1 ? `${totalData} events` : `${totalData} event`
  }, [totalData])

  const onChange = (checked: boolean) => {
    setMedalView(checked)
  };

  return (
    <div className="component-event-results">
      <div className="component-event-results__heading">
        <h2 className="component-event-results__total">
          {totalDataText}
        </h2>
        <div className="component-event-results__toggle">
          <span className="component-event-results__toggle-text">
            Medal View
          </span>
          <Switch defaultChecked={isMedalView} onChange={onChange} />
        </div>
      </div>
      {data.map((item, index) => (
        <EventItem key={index} item={item} isMedalView={isMedalView} />
      ))}
    </div>
  )
}

export default EventResults
