import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useBanquetProps, BanquetProps } from 'banquet-runtime-modules'
import axios from 'axios'
import { Home } from './Home/Home'
import { Calculator } from './Calculator/Calculator'
import { FoodDonation } from './FoodDonation/FoodDonation'
import { TrackWaste } from './TrackWaste/TrackWaste'
import {
  HeadingGroup,
  LayoutProvider,
  Page,
  PageArea,
  PageHeader,
  Title
} from '@toasttab/buffet-pui-config-templates'

const PageLayout = ({ children, header }: any) => {
  return (
    <div className='flex items-start max-w-6xl m-auto'>
      <LayoutProvider>
        <Page className='w-full'>
          <PageHeader>
            <HeadingGroup>
              <Title>{header}</Title>
            </HeadingGroup>
          </PageHeader>
          <PageArea className='bg-white w-full'>{children}</PageArea>
        </Page>
      </LayoutProvider>
    </div>
  )
}

export function App(props: BanquetProps) {
  const { restaurantInfo } = props
  const token = document.getElementById('authenticity-token') || null

  axios.create({
    headers: {
      Authorization: token,
      'toast-management-set-guid': restaurantInfo?.managementSet?.guid,
      'toast-restaurant-external-id': restaurantInfo?.restaurantGuid,
      'toast-restaurant-set-guid': restaurantInfo?.restaurantSetGuid
    }
  })
  return (
    <BrowserRouter basename='/restaurants/admin/food-waste'>
      <Routes>
        <Route
          path='/'
          element={
            <PageLayout header='Food-waste'>
              <Home />
            </PageLayout>
          }
        />

        <Route path='/calculator' element={<Calculator />} />
        <Route path='/food-donation' element={<FoodDonation />} />
        <Route
          path='/track-waste'
          element={
            <PageLayout header='Tracker'>
              <TrackWaste />
            </PageLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
