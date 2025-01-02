import React from 'react';
import { User } from 'lucide-react';
import {ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/nextjs'
import Loader from '../loader';
import { Button } from '@/components/ui/button';

type Props = {}

const ClerkAuthState = (props: Props) => {
  return (
    <>
        <ClerkLoading>
            <Loader state>
                <></>
            </Loader>
        </ClerkLoading>
        <SignedOut>
            <SignedIn>
                <Button className='rounded-xl bg-[#252525] text-white hover:bg-[#252525]/70'><User></User>Login</Button>
            </SignedIn>
        </SignedOut>
        <SignedIn>
            <UserButton>
                <UserButton.UserProfileLink
                    label='Dashboard'
                    url={`/dashboard`}
                    labelIcon={<User size={14}></User>}
                >

                </UserButton.UserProfileLink>
            </UserButton>
        </SignedIn>
    </>
  )
}

export default ClerkAuthState