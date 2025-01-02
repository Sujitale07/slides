import { activateAutomation } from '@/actions/automations';
import { Button } from '@/components/ui/button'
import { useMutationData } from '@/hooks/use-mutation-data';
import { useQueryAutomation } from '@/hooks/user-queries';
import { ActiveAutomation } from '@/icons/active-automation'
import { Loader2 } from 'lucide-react';
import React from 'react'


type Props = {
  id: string;
}

const ActivateAutomationButton = ({id}: Props) => {

  const {data} = useQueryAutomation(id);
  const {mutate, isPending} = useMutationData(['activate'], (data: {state: boolean})=>activateAutomation(id, data.state) , 'automation-info');

  return (
    <Button
      disabled={isPending}
        onClick={()=>mutate({state: !data?.automation?.active})} 
     className='lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4'>
           
          {isPending ? <Loader2 size={20} className='mr-2'></Loader2> :
           <ActiveAutomation></ActiveAutomation>}
          <p className='lg:inline hidden'>
              {data?.automation?.active ? "Disable" : "Activate"}
          </p>

       
    </Button>
  )
}

export default ActivateAutomationButton