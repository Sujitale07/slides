import { onBoardUser } from '@/actions/user'
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const Page = async (props: Props) => {

    //WIP://Server Action OnBoard the User
    let user = await onBoardUser();

    if(user.status >= 200 || user.status < 300){
      return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`)
    }

    return redirect(`/sign-in`)
}

export default Page