import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useBanquetProps, BanquetProps } from 'banquet-runtime-modules'
import { ApolloProvider, useQuery } from '@apollo/client'
import axios from 'axios'
import { Home } from './components/Home/Home'
import { Calculator } from './components/Calculator/Calculator'
import { FoodDonation } from './components/FoodDonation/FoodDonation'
import { TrackWaste } from './components/TrackWaste/TrackWaste'
import {
  HeadingGroup,
  LayoutProvider,
  Page,
  PageActions,
  PageArea,
  PageHeader,
  Title
} from '@toasttab/buffet-pui-config-templates'
import { ProductionSheet } from './components/ProductionSheet/ProductionSheet'
import { Button } from '@toasttab/buffet-pui-buttons'
import { WasteReport } from './components/WasteReport/WasteReport'
import { WasteScore } from './components/WasteScore/WasteScore'
import { useClient } from './apollo/apollo-client'
import { GET_NET_SALES_GUEST_COUNT } from './graphql/graphql'

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
  const { client } = useClient()
  const { restaurantInfo } = props
  console.log({ props })
  const [items, setItems] = React.useState([])
  const [guestCount, setGuestCount] = React.useState(0)
  const token = document.getElementById('authenticity-token') || null

  axios.create({
    headers: {
      Authorization: token,
      'toast-management-set-guid': restaurantInfo?.managementSet?.guid,
      'toast-restaurant-external-id': restaurantInfo?.restaurantGuid,
      'toast-restaurant-set-guid': restaurantInfo?.restaurantSetGuid
    }
  })

  React.useEffect(() => {
    // get list of items
    axios
      .get(
        'https://preprod.eng.toasttab.com/restaurants/admin/menuitems/serversidemenuentitiestable?className=MenuItem&sEcho=1&iColumns=12&sColumns=&iDisplayStart=0&iDisplayLength=250&mDataProp_0=idString&mDataProp_1=null&mDataProp_2=name&mDataProp_3=masterId&mDataProp_4=importedId&mDataProp_5=guid&mDataProp_6=basePrice&mDataProp_7=createdDate&mDataProp_8=isDeleted&mDataProp_9=isModifier&mDataProp_10=sku&mDataProp_11=plu&sSearch=&bRegex=false&sSearch_0=&bRegex_0=false&bSearchable_0=true&sSearch_1=&bRegex_1=false&bSearchable_1=true&sSearch_2=&bRegex_2=false&bSearchable_2=true&sSearch_3=&bRegex_3=false&bSearchable_3=true&sSearch_4=&bRegex_4=false&bSearchable_4=true&sSearch_5=&bRegex_5=false&bSearchable_5=true&sSearch_6=&bRegex_6=false&bSearchable_6=true&sSearch_7=&bRegex_7=false&bSearchable_7=true&sSearch_8=&bRegex_8=false&bSearchable_8=true&sSearch_9=&bRegex_9=false&bSearchable_9=true&sSearch_10=&bRegex_10=false&bSearchable_10=true&sSearch_11=&bRegex_11=false&bSearchable_11=true&iSortingCols=1&iSortCol_0=1&sSortDir_0=asc&bSortable_0=false&bSortable_1=false&bSortable_2=true&bSortable_3=true&bSortable_4=true&bSortable_5=true&bSortable_6=true&bSortable_7=true&bSortable_8=true&bSortable_9=true&bSortable_10=true&bSortable_11=true&showArchived=false&showModifiers=true'
      )
      .then((res) => {
        const { data } = JSON.parse(res.data.slice(1))
        // console.log({ res: JSON.parse(res.data.slice(1)) })
        setItems(data)
      })
  }, [])

  // const { data } = useQuery(GET_NET_SALES_GUEST_COUNT, {
  //   variables: {
  //     restaurantGuid: restaurantInfo?.restaurantGuid,
  //     currentDate: 'LAST_WEEK',
  //     comparisonDate: null,
  //     restaurantId: restaurantInfo?.restaurant?.id
  //   }
  // })

  // $restaurantGuid: ID!
  //   $currentDate: CurrentDate!
  //   $comparisonDate: ComparisonDate!
  //   $restaurantId: ID!

  // console.log({ data })

  return (
    <ApolloProvider client={client}>
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
          <Route
            path='/production-sheet'
            element={<ProductionSheet items={items} />}
          />
          <Route path='/waste-report' element={<WasteReport items={items} />} />
          <Route path='/waste-score' element={<WasteScore />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}
