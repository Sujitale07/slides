"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { onOAuthInstagram } from '@/actions/integrations';
import { useQuery } from '@tanstack/react-query';
import { onUserInfo } from '@/actions/user';

type Props = {
    title: string;
    description: string;
    icon: React.ReactNode;
    strategy: "INSTAGRAM" | "CRM"
}

type INTEGRATION = {
  id: string;
  name: "INSTAGRAM";
  token: string;
  expiresAt: Date | null;
}

const IntegrationCard = ({title, description, icon, strategy}: Props) => {

  const onInstaOAuth = ()=> onOAuthInstagram(strategy);

  const {data} = useQuery({
    queryKey: ['user-profile'],
    queryFn: onUserInfo
  });

  const integrated = data?.data?.integrations.find((integration: INTEGRATION)=>integration.name === strategy)

  return (
    <div className='border-2 border-[#3352CC] rounded-2xl gap-x-5 p-5 flex items-center justify-between'>
        {icon}
        <div className="flex flex-col flex-1">
            <h3 className='text-xl'>{title}</h3>
            <p className='text-[#9d9d9d] text-base w-full mt-2 md:w-10/12 xl:w-8/12 2xl:w-6/12'>{description}</p>
        </div>      
        <Button onClick={onInstaOAuth} disabled={integrated?.name == strategy} className='bg-gradient-to-br text-white rounded-full text-lg from-[#3352CC] font-medium to-[#1C2D70] hover:opacity-70 transition duration-100' >
            {integrated ? "Connected" : "Connect"}
        </Button>
    </div>
  )
}

export default IntegrationCard