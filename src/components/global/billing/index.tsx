import React from 'react'
import PaymentCard from './payment-card'
import { useQueryUser } from '@/hooks/user-queries'
import Loader from '../loader'

type Props = {}

const Billing = (props: Props) => {
  const {data, isLoading, isError} = useQueryUser()
 
  if (isError || !data?.data?.subscription?.plan) {
    return "Unable to fetch subscription data";
  }

  return (
    <Loader state={isLoading}>
      <div className='flex lg:flex-row flex-col gap-5 w-full '>

          <PaymentCard current={data?.data?.subscription?.plan!} label='FREE'  />
          <PaymentCard current={data?.data?.subscription?.plan!} label='PRO'  />
      </div>
    </Loader>
  )
}

export default Billing