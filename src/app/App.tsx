import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useBanquetProps, BanquetProps } from 'banquet-runtime-modules'
import { Home } from './Home/Home'
import { Calculator } from './Calculator/Calculator'
import { FoodDonation } from './FoodDonation/FoodDonation'

export function App(props?: BanquetProps) {
  return (
    <BrowserRouter basename='/restaurants/admin/food-waste'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/food-donation' element={<FoodDonation />} />
      </Routes>
    </BrowserRouter>

    // <div className='p-4 space-y-2 type-default'>
    //   <div className='my-2 type-headline-1'>Hello World!</div>
    //   <p>
    //     This is the <strong className='font-semibold'>food-waste-spa</strong>{' '}
    //     banquet spa!
    //   </p>
    //   <p>
    //     An application gets props passed in from banquet. For example, the
    //     user's first name is {props?.auth?.userInfo?.firstName}
    //   </p>
    //   <SubComponent />
    // </div>
  )
}

const SubComponent = () => {
  const props = useBanquetProps()
  return (
    <p>
      Props can also be accessed from the useBanquetProps hook. For example, the
      user's last name is {props?.auth?.userInfo?.lastName}
    </p>
  )
}
