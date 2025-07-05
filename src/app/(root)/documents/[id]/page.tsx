
import CollaborativeRoom from '@/components/CollaborativeRoom'
import { getDocument } from '@/lib/actions/room.actions';
import { getClerkUsers } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const Document = async ({ params}: SearchParamProps) => {
  const { id } = await params;
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/');

  const room = await getDocument({
    roomId: id,
     userId: clerkUser.emailAddresses[0].emailAddress
     
    });

    if(!room) 
      redirect('/');


    // Assess the permissions of the user to access the document
    const userIds=Object.keys(room.usersAccesses);
    const users=await getClerkUsers({userIds});

    const userData = (users ?? [])
      .filter((user): user is User => user !== undefined && user !== null)
      .map((user) => ({
        ...user,
        userType: (room.usersAccesses[user.email] as string[] | undefined)?.includes('room:write')
          ? 'editor' as UserType
          : 'viewer' as UserType
      }))

     const currentUserType = (room.usersAccesses[clerkUser.emailAddresses[0].emailAddress] as string[] | undefined)?.includes('room:write')
      ? 'editor' : 'viewer';
 
  

  return (
    <main >
    <CollaborativeRoom 
      roomId={id} 
      roomMetadata={{
        ...room.metadata,
        creatorId: Array.isArray(room.metadata.creatorId) ? room.metadata.creatorId.join(', ') : room.metadata.creatorId,
        email: Array.isArray(room.metadata.email) ? room.metadata.email.join(', ') : room.metadata.email,
        title: Array.isArray(room.metadata.title) ? room.metadata.title.join(', ') : room.metadata.title
      }}
      users={userData}
      currentUserType={currentUserType}
       
    />
      
      
    </main>
  )
}

export default Document
