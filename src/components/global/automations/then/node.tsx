"use client";
import { Separator } from '@/components/ui/separator';
import { useQueryAutomation } from '@/hooks/user-queries';
import { PlaneBlue } from '@/icons/plane-blue';
import { SmartAi } from '@/icons/smart-ai';
import { Warning } from '@/icons/warning';
import React from 'react'
import PostButton from '../post';

type Props = {
    id: string;
}

type Trigger =  {
    id: string;
    type: string;
    automationId: string | null;
}

const ThenNode = ({id}: Props) => {
    const { data } = useQueryAutomation(id)
    const commentTrigger = data?.automation?.trigger.find((trigger:Trigger)  => trigger.type === 'COMMENT')

    return !data?.automation?.listener ? null : (
        <div className='flex flex-col gap-y-3 w-full lg:w-10/12 relative xl:w-6/12 p-5 rounded-xl bg-[#1d1d1d] shadow-md'>
            <div className='absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50'>
                <span className='h-[9px] w-[9px] bg-connector/10 rounded-full'></span>
                <Separator orientation='vertical' className='bottom-full flex flex-1 border-[1px] border-connector/10' />
                
                <span className='h-[9px] w-[9px] bg-connector/10 rounded-full'></span>
            </div>
            <div className='flex gap-x-2'>
                <Warning></Warning>
                Then...
            </div>
            <div className="bg-background-80 p-3 rounded-xl flex flex-col gap-y-2" >
                <div className="flex gap-x-2 items-center">
                    {data.automation.listener.listener === 'MESSAGE' ? <PlaneBlue></PlaneBlue> : <SmartAi></SmartAi> }
                    <p className='text-lg font-bold'>{data.automation.listener.listener === "MESSAGE" ? "Sends the user a message" : "Let Smart Ai Take Over"}</p>
                </div>
                    <p className='font-light text-text-secondary'>
                        {data.automation.listener.prompt}
                    </p>
                {data.automation.posts.length > 0 ?
                 <></> : 
                 commentTrigger ? 
                    <PostButton id={id}></PostButton>
                        :
                    ""
                    }
            </div>
        </div>
    )
}

export default ThenNode