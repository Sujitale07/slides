import { Button } from '@/components/ui/button'
import { useSubscription } from '@/hooks/use-subscription'
import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {}

const PaymentButton = (props: Props) => {

  const {isProcessing, onSubscribe} = useSubscription()

  return (
    <Button
    disabled={isProcessing}
    onClick={onSubscribe}
    className='bg-gradient-to-br
     text-white 
     rounded-full 
     mt-3
     w-full
    from-[#6d60a3] 
    via-[#9434E6] 
    font-bold 
    to-[#CC3BD4]'>
      {isProcessing ? <Loader2 className='animate-spin'></Loader2> : null}
      {isProcessing ? "Processing" : "Upgrade"}
      
    </Button>
  )
}

export default PaymentButton