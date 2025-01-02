import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'
import React from 'react'

type Props = {}

const Notifications = (props: Props) => {
  return (
    <Button className='bg-white rounded-full py-6'>
        <Bell color='#3352CC' fill='#3352CC'>

        </Bell>
    </Button>
  )
}

export default Notifications