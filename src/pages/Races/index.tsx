import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

// components
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import EventResults from '../../components/Events/EventResults'
import Footer from '../../components/Footer'

// helpers
import { END_POINDS } from '../../utils/endpoints'
import { getService } from '../../utils/service'

// types
import { ItemProps } from '../../components/Events/EventItem'

const Races = () => {
  const location = useLocation()

  const [isLoading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<{
    totalData: number;
    data: ItemProps[]
  }>({
    totalData: 0,
    data: []
  })

  const sportType = useMemo(() => {
    return location?.state?.sportType
  }, [location])

  const fetchData = useCallback(
    async () => {
      setLoading(true)
      const { data, error } = await getService(END_POINDS.RACE_FILTER, {
        skipCount: 0,
        limit: 10,
        sportType
      })

      setLoading(false)

      if (error) {
        return
      }

      setData(data)
    },
    [sportType]
  )

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <Header hasSearch={false} />
      <EventResults totalData={data.totalData} data={data.data} />
      {isLoading && <Loader />}
      <Footer />
    </>
  )
}

export default Races
