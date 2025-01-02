"use client";
import { useAutomationPost } from '@/hooks/use-automations';
import { useQueryAutomationPost } from '@/hooks/user-queries';
import React from 'react'
import TriggerButton from '../trigger-button';
import { CheckCircle, CheckIcon } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Loader from '../../loader';

type Props = {
    id: string;
}

const PostButton = ({id}: Props) => {

    const {data} = useQueryAutomationPost();
    const {isPending, onSelectPost, posts, mutate} = useAutomationPost(id);

  return (
    <TriggerButton label='Attach a Post'>
        {data?.status == 200 ? 
            <div className='flex flex-col gap-y-2 w-full'>
                <div className='flex flex-wrap gap-3 w-full'>
                    {data?.data.data.map((post: InstagramPostProps) => {
                        <div 
                            className='relative w-4/12 aspect-square rounded-lg cursor-pointer overflow-hidden'
                            key={post.id}
                            onClick={() => onSelectPost({
                                postid: post.id,
                                caption: post.caption,
                                media: post.media_url,
                                mediaType: post.mediaType,
                            })}
                        >
                            {posts.find((p) => p.postid === post.id) && <CheckCircle fill='white' stroke='black' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'></CheckCircle>}
                            <Image
                                fill
                                sizes="100vw"
                                src={post.media_url}
                                alt="post image"
                                className={cn(
                                    'hover:opacity-75 transition duration-100',
                                    posts.find((p) => p.postid === post.id) && 'opacity-75'
                                )}
                            />
                        </div>
                    })}
                </div>
                <Button
                    onClick={mutate}
                    disabled={posts.length === 0}
                    className='bg-gradient-to-br from-[#3352CC] to-[#1C2D70] text-white font-medium rounded-xl p-3'><Loader state={isPending}>Attach Post</Loader></Button>
            </div>
        : "No Posts Found"}
    </TriggerButton>
  )
}

export default PostButton