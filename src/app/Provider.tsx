'use client';
import React, { ReactNode } from 'react'
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react/suspense'
import Loader from '@/components/Loader';
import { useUser } from '@clerk/nextjs';
import { getClerkUsers, getDocumentUsers } from '@/lib/actions/user.actions';

const Provider = ({children}:{children: ReactNode}) => {
  const { user: clerkUser } = useUser();
  return (
    <LiveblocksProvider 
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={async ({ userIds }) => {
      // Generate a color based on a string (user id)
      function stringToColor(str: string) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';
        for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        color += ('00' + value.toString(16)).slice(-2);
        }
        return color;
      }

      const users = await getClerkUsers({ userIds });

      return (users ?? [])
        .filter((user) => user !== undefined && user !== null)
        .map((user) => ({
        id: user.id,
        name: user.name || user.email || "Unknown User",
        email: user.email,
        avatar: user.avatar ||  "",
        color: stringToColor(user.id)
        }));
      }}
      resolveMentionSuggestions={async ({ text, roomId }) => {
        const roomUsers = await getDocumentUsers({
          roomId,
          currentUser: clerkUser?.emailAddresses?.[0]?.emailAddress ?? "",
          text,
        })

        return roomUsers ?? [];
      }}
    >
      <ClientSideSuspense fallback={<div><Loader/></div>}>
      {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  )
}

export default Provider
