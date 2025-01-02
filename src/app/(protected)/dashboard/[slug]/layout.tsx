import Navbar from '@/components/global/navbar'
import Sidebar from '@/components/global/sidebar/index'
import React from 'react';
import {dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query';
import { PrefetchUserAutomations, PrefetchUserProfile } from '@/react-query/prefetch';

type Props = {
    children: React.ReactNode
    params: {slug: string}
}

const Layout = async ({children, params} :  Props) => {

    // Query 
    // WIP:     Query Client  fetch data

    const query = new QueryClient();
    await PrefetchUserProfile(query);
    await PrefetchUserAutomations(query);

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className='p-3'>
          {/* Sidebar */}
          <Sidebar slug={params.slug}></Sidebar>
          {/* Navbar */}
          <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
            <Navbar slug={params.slug}></Navbar>
            {children}
          </div>

      </div>
    </HydrationBoundary>
  )
}

export default Layout