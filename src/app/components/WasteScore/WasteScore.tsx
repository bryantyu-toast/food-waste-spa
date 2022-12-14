import * as React from 'react'
import axios from 'axios'
import { useBanquetProps, BanquetProps } from 'banquet-runtime-modules'
import { useQuery } from '@apollo/react-hooks'
import { GET_NET_SALES_GUEST_COUNT } from '../../graphql/graphql'
import { Button } from '@toasttab/buffet-pui-buttons'

const convertToCurrency = (e: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return formatter.format(e)
}

export const WasteScore = () => {
  const { restaurantInfo }: BanquetProps = useBanquetProps()
  const [employeeCount, setEmployeeCount] = React.useState(0)
  const [guestCount, setGuestCount] = React.useState(0)
  const [editableGuestCount, setEditableGuestCount] = React.useState(0)

  const { data } = useQuery(GET_NET_SALES_GUEST_COUNT, {
    variables: {
      restaurantGuid: restaurantInfo?.restaurantGuid,
      restaurantId: restaurantInfo?.restaurant?.id,
      currentDate: 'LAST_WEEK',
      comparisonDate: 'PRIOR_PERIOD'
    },
    onCompleted: (data) => {
      console.log({ results: data })
      const numberOfGuests = data?.guestCount.data.reduce(
        (acc: any, el: any) => {
          return acc + el.currentPeriod
        },
        0
      )

      if (numberOfGuests) {
        setGuestCount(numberOfGuests)
        setEditableGuestCount(numberOfGuests)
      }
    }
  })

  React.useEffect(() => {
    axios
      .get('https://preprod.eng.toasttab.com/api/restaurants/employees/users')
      .then((res) => {
        console.log(res.data)
        setEmployeeCount(res?.data?.users.length)
      })
  }, [])

  return (
    <div className='mt-32'>
      <div className='text-center'>
        <p>employee count: {employeeCount}</p>
        <p>Guest count last week: {guestCount}</p>
      </div>
      <div className='flex justify-center mt-16'>
        <h2 className='text-heading-2 mr-16'>QSR</h2>
        <table>
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
              <td className='p-4'>{editableGuestCount * 0.5} lbs</td>
              <td className='p-4'>
                {convertToCurrency(editableGuestCount * 0.5 * 1.14)}
              </td>
            </tr>

            <tr>
              <td className='p-4'>Waste per month</td>
              <td className='p-4'>{editableGuestCount * 0.5 * 4} lbs</td>
              <td className='p-4'>
                {convertToCurrency(editableGuestCount * 0.5 * 4 * 1.14)}
              </td>
            </tr>

            <tr>
              <td className='p-4'>Waste per year</td>
              <td className='p-4'>{editableGuestCount * 0.5 * 52} lbs</td>
              <td className='p-4'>
                {convertToCurrency(editableGuestCount * 0.5 * 52 * 1.14)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex justify-center mt-16'>
        <h2 className='text-heading-2 mr-16'>FSR</h2>
        <table>
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
              <td className='p-4'>{editableGuestCount * 1} lbs</td>
              <td className='p-4'>
                {convertToCurrency(editableGuestCount * 1 * 1.14)}
              </td>
            </tr>

            <tr>
              <td className='p-4'>Waste per month</td>
              <td className='p-4'>{editableGuestCount * 1 * 4} lbs</td>
              <td className='p-4'>
                {convertToCurrency(editableGuestCount * 1 * 4 * 1.14)}
              </td>
            </tr>

            <tr>
              <td className='p-4'>Waste per year</td>
              <td className='p-4'>{editableGuestCount * 1 * 52} lbs</td>
              <td className='p-4'>
                {convertToCurrency(editableGuestCount * 1 * 52 * 1.14)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='text-center mt-16'>
        <div className='flex justify-center'>
          <div className='mr-8'>
            <p>Weekly waste {editableGuestCount} lbs</p>
            <input
              type='range'
              value={editableGuestCount}
              min='1'
              max={guestCount * 2}
              step='1'
              onChange={(e: any) => {
                setEditableGuestCount(e.target.value)
              }}
            />
          </div>
          <Button onClick={() => setEditableGuestCount(guestCount)}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}
