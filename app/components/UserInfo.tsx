'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
const UserInfo = () => {
    const { data: session  } = useSession()

    return (
        <div>
            {
                session && <>
                    {session?.user?.email}
                    <Image alt='' width={100} height={100} className='w-32 h-32' src={session?.user?.image as string} />
                </>
            }

        </div>
    )
}

export default UserInfo