import * as React from 'react'
import axios from 'axios'
import { sha256 } from 'crypto-hash'
import { useBanquetProps, BanquetProps } from 'banquet-runtime-modules'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import { useQuery } from '@apollo/react-hooks'
import { GET_NET_SALES_GUEST_COUNT } from '../../graphql/graphql'

export const WasteScore = () => {
  const { restaurantInfo }: BanquetProps = useBanquetProps()
  const [employeeCount, setEmployeeCount] = React.useState(0)

  const { data } = useQuery(GET_NET_SALES_GUEST_COUNT, {
    variables: {
      restaurantGuid: restaurantInfo?.restaurantGuid,
      restaurantId: restaurantInfo?.restaurant?.id,
      currentDate: 'LAST_WEEK',
      comparisonDate: 'PRIOR_PERIOD'
    }
  })

  const guestCount = data?.guestCount.data.reduce((acc, el) => {
    return acc + el.currentPeriod
  }, 0)
  console.log(guestCount)
  React.useEffect(() => {
    // console.log(persistedQueriesLink)
    // const event = new Date()
    // sha256(event.toString()).then((res) => {
    //   console.log('here', res)
    //   axios
    //     .get(
    //       `https://preprod.eng.toasttab.com/api/service/restaurant-metrics-bff/v1/graphql?operationName=getNetSalesGuestCount&variables={"currentDate":"LAST_WEEK","comparisonDate":"PRIOR_PERIOD","restaurantId":"${restaurantInfo?.restaurant?.id}","restaurantGuid":"${restaurantInfo?.restaurantGuid}"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"${res}"}}`
    //     )
    //     .then((res) => {
    //       console.log({ res })
    //       if (res.data.data) {
    //         const days = res.data.data.guestCount.data
    //         const totalGuests = days.reduce((acc: number, el: any) => {
    //           return acc + el.currentPeriod
    //         }, 0)
    //         console.log('total', totalGuests)
    //         setGuestCount(totalGuests)
    //       }
    //     })
    // })

    axios
      .get('https://preprod.eng.toasttab.com/api/restaurants/employees/users')
      .then((res) => {
        console.log(res.data)
        setEmployeeCount(res.data.users.length)
      })
  }, [])

  return (
    <div className='mt-32'>
      <p>employee count: {employeeCount}</p>
      <table className='mx-auto'>
        <thead>
          <tr>
            <th></th>
            <th>lbs</th>
            <th>$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-4'>Waste per week</td>
            <td className='p-4'>{guestCount * 0.5} lbs</td>
            <td className='p-4'>${guestCount * 0.5 * 1.14}</td>
          </tr>

          <tr>
            <td className='p-4'>Waste per month</td>
            <td className='p-4'>{guestCount * 0.5 * 4} lbs</td>
            <td className='p-4'>${guestCount * 0.5 * 4 * 1.14}</td>
          </tr>

          <tr>
            <td className='p-4'>Waste per year</td>
            <td className='p-4'>{guestCount * 0.5 * 52} lbs</td>
            <td className='p-4'>${guestCount * 0.5 * 52 * 1.14}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
