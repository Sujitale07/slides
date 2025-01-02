"use client"
import { ChevronRight, PencilIcon } from 'lucide-react';
import React from 'react'
import ActivateAutomationButton from '../../activate-automation-button';
import { useQueryAutomations, useQueryAutomation } from '@/hooks/user-queries';
import { useEditAutomation } from '@/hooks/use-automations';
import { useMutationDataState } from '@/hooks/use-mutation-data';
import { Input } from '@/components/ui/input';

type Props = {
    id: string;
}

const AutomationBreadCrumb = ({id}: Props) => {

    const {data} = useQueryAutomation(id);

    const {edit, enableEdit, disableEdit, isPending, inputRef} = useEditAutomation(id);

    const {latestVariable} = useMutationDataState(['update-state'])


  return (
    <div className="rounded-full w-full p-5 bg-[#18181b74] flex justify-between items-center">
        <div className="flex items-center gap-x-3 min-w-0">
            <p className="text-[#9B9CA0] truncate">Automations</p>
            <ChevronRight color='#9B9CA0' ></ChevronRight>
            <span className='flex gap-x-3 items-center'>
                {
                    edit ?
                    <Input ref={inputRef} placeholder={isPending ? latestVariable?.variables : "Add New Name"} className='bg-transparent h-auto outline-none text-base border-none p-0' ></Input>
                      : 
                    <p className="text-[#9B9CA0] truncate">{latestVariable?.variables ? latestVariable?.variables.name : data?.automation?.name}</p>
                }
                    {
                        edit? 
                        <></>:
                <span onClick={enableEdit}
                    className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4"
                >
                    <PencilIcon  size={14} />
                </span>
                    }
            </span>
        </div>
        <div className="flex items-center ml-auto gap-x-5">
            <p className='hidden md:block min-w-0 text-text-secondary/60 text-sm truncate'>
                All updates are automatically saved !
            </p>
            <div className="flex gap-x-5 flex-shrink-0">
                <p className='text-text-secondary  min-w-0 text-sm truncate'>
                    Changes Saved
                </p>
            </div>
        </div>
        <ActivateAutomationButton id={id}></ActivateAutomationButton>
    </div>
  )
}

export default AutomationBreadCrumb