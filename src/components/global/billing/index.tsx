import React from 'react'
import PaymentCard from './payment-card'
import { useQueryUser } from '@/hooks/user-queries'

type Props = {}

const Billing = (props: Props) => {
  const {data} = useQueryUser()

  return (
    <div className='flex lg:flex-row flex-col gap-5 w-full '>

        <PaymentCard current={data?.data?.subscription?.plan!} label='FREE'  />
        <PaymentCard current={data?.data?.subscription?.plan!} label='PRO'  />
    </div>
  )
}

export default Billing