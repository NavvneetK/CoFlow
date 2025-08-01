
import AddDocumentBtn from '@/components/AddDocumentBtn'
import { DeleteModal } from '@/components/DeleteModal'
import Header from '@/components/Header'
import Notifications from '@/components/Notifications'
import { getDocuments } from '@/lib/actions/room.actions'
import { dateConverter } from '@/lib/utils'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { RoomData } from '@liveblocks/node'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import React from 'react'

const Home = async () => {
  const clerkUser= await currentUser();
  if(!clerkUser) redirect('/');

  const roomDocuments = await getDocuments(clerkUser.emailAddresses[0].emailAddress);
  
  return (
    

    <main className='home-container'>
      <Header className='sticky left-0 top-0' >
        <div className=' flex items-center gap-2 lg:gap-4'>
          <Notifications/>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      {(roomDocuments?.data && roomDocuments.data.length > 0) ? (
       <div className="document-list-container">
          <div className="document-list-title">
            <h3 className="text-28-semibold">All documents</h3>
            <AddDocumentBtn 
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
          <ul className="document-ul">
    {roomDocuments.data.map((room: RoomData) => (
      <li key={room.id} className="document-list-item">
        <Link href={`/documents/${room.id}`} className="flex flex-1 items-center gap-4">
          <div className="hidden rounded-md bg-dark-500 p-2 sm:block">
            <Image 
              src="/assets/icons/doc.svg"
              alt="file"
              width={40}
              height={40}
            />
          </div>
          <div className="space-y-1">
            <p className="line-clamp-1 text-lg">{room.metadata.title}</p>
<p className="text-sm font-light text-blue-100">Created about {dateConverter(new Date(room.createdAt).toISOString())}</p>          </div>
        </Link>
        <DeleteModal roomId={room.id} />
      </li>
    ))}
          </ul>
        </div>
      ) : (
        <div className='document-list-empty'>
          <Image src='/assets/icons/doc.svg'  alt='Document' width={40} height={40} className='mx-auto'/>
          <AddDocumentBtn userId={clerkUser.id} email={clerkUser.emailAddresses[0].emailAddress} />
        </div>
      )}
    </main>

  )
}

export default Home
