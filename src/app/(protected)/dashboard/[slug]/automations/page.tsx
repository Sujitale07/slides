import AutomationList from '@/components/global/automation-list'
import CreateAutomation from '@/components/global/create-automation'
import { Separator } from '@/components/ui/separator'
import { Check } from 'lucide-react'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-5'>
        <div className='lg:col-span-4'>
            <AutomationList />
        </div>
        <div className='lg:col-span-2'>
            <div className='flex flex-col rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active'>
                <div>
                    <h2 className='text-xl'>Automations</h2>
                    <p className="text-text-secondary mt-2">
                        Your Live Automation will show here
                    </p>
                    <Separator  orientation="horizontal"
            className="bg-[#333336] mt-4"></Separator>
                </div>
                <div className="flex flex-col gap-y-5">
                    {
                        [1,2,3].map((item: number)=>{
                            return <div className='flex justify-between items-start' key={item}>
                                <div className="flex flex-col">
                                    <h3 className="font-medium">
                                        Direct Traffic towards website  
                                    </h3>
                                    <p className='text-text-secondary mt-2 text-sm'>
                                        October 5th 2024
                                    </p>
                                </div>
                                <Check></Check>
                            </div>
                        })
                    }
                </div>
                <CreateAutomation></CreateAutomation>
            </div>
        </div>
    </div>
  )
}

export default Page