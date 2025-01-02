import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    trigger: JSX.Element,
    children: React.ReactNode,
    className: string
}

const PopOver = ({trigger,children,className}: Props) => {
  return (
    <Popover>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent
            className={cn('bg-[#1D1D1D] shadow-lg', className)}
            align='end'
            side='bottom'
        >
            {children}
        </PopoverContent>
    </Popover>
  )
}

export default PopOver