import { cn } from '@/lib/utils'
import React from 'react'
import { Spinner } from './spinner'

type Props = {
    state: boolean,
    className?: string,
    children: React.ReactNode
    color?: string
}

const Loader = ({state, color, className, children}: Props) => {
    return state ? 
        <div className={cn(className)}>
            <Spinner color={color}></Spinner>
        </div>
        :
        (
            children
        )
}

export default Loader