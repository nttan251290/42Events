import React, { useEffect, useState } from 'react'

// components
import { BackTop } from 'antd'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Categories from '../../components/Categories'
import Events from '../../components/Events'
import Loader from '../../components/Loader'
import Footer from '../../components/Footer'

// helpers
import { END_POINDS } from '../../utils/endpoints'
import { getService } from '../../utils/service'

interface RACE_EVENTS_TYPES {
  bestDeals: any[];
  featured: any[];
  newRelease: any[];
  popular: any[];
  offline: any[];
  past: any[];
}

const Homepage = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<RACE_EVENTS_TYPES>({
    bestDeals: [],
    featured: [],
    newRelease: [],
    popular: [],
    offline: [],
    past: []
  })

  const fetchData = async () => {
    setLoading(true)
    const { data, error } = await getService(END_POINDS.RACE_EVENTS)

    setLoading(false)

    if (error) {
      return
    }

    setData(data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <Banner data={data.featured} />
      <Categories />
      <Events title="New Release 🎉" data={data.newRelease} />
      <Events title="Best Deals 🎁" data={data.bestDeals} />
      <Events title="Most Popular 🔥" data={data.popular} />
      <Events title="On-ground Events 🏃🏻‍♂🏃🏻‍♀️️" data={data.offline} />
      <Events title="Past Events ⛳️" data={data.past} />
      {isLoading && <Loader />}
      <BackTop />
      <Footer />
    </>
  )
}

export default Homepage
