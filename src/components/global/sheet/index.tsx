import React from 'react'
import { Sheet as ShadcnSheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

type Props = {
    trigger: React.ReactNode,
    children: React.ReactNode,
    className?: string
    side: 'left' |'right'
}

const Sheet = ({children, side, trigger, className}: Props) => {
  return (
    <ShadcnSheet >
        <SheetTrigger className={className}>
            {trigger}
        </SheetTrigger>
        <SheetContent side={side}>{children}</SheetContent>
    </ShadcnSheet>
  )
}

export default Sheet