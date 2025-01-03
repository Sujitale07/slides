import { InstagramBlue } from '@/icons/instagram-blue'
import { InstagramDuoToneBlue } from '@/icons/instagram-duotone-blue'
import { PlaneBlue } from '@/icons/plane-blue'
import React from 'react'

type Props = {
    type: string,
    keywords: {
        id: string,
        word: string,
        automationId: string | null
    }[]
}

const ActiveTrigger = ({keywords, type}: Props) => {
  return (
    <div className='bg-background-80 p-3 rounded-xl w-full'>
        <div className='flex gap-x-2 items-center'>
            {type === "COMMENT" ? <InstagramBlue /> : <PlaneBlue></PlaneBlue>}
            <p className="text-md tracking-wide">

            {type === "COMMENT" ? "User Comments on my post" : "User Send me a Direct Message"}

            </p>
        </div>
        <p className="text-text-secondary tracking-wide mt-2 text-sm">
        {type === "COMMENT" ?
         "If the user comments on a video that is setup to listen for keywords, this automation will fire" 
         : 
         "If the user sends you a message that contains a keyword, this automation will fire"}
        </p>
        <div className='flex gap-2 mt-5 flex-wrap'>
            {
                keywords?.map((word: any)=>{
                    return <div key={word.id}
                        className='bg-gradient-to-br from-[#3352CC] to-[#1c2D70] flex items-center gap-x-2 capitalize text-white font-light py-1 px-4 rounded-full'
                    >
                        <p>{word.word}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default ActiveTrigger