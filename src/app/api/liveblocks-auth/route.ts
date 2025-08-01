import { liveblocks } from "@/lib/liveblocks";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export async function POST() {
    const clerkUser=await currentUser();

    if(!clerkUser)  redirect('/');  

    

    const {id,firstName,lastName,emailAddresses,imageUrl}=clerkUser;
  // Get the current user from your database
  const user = {
    id, // Use Clerk's user ID
    info: {
     id, // Add the id property as required
     name: lastName ? `${firstName} ${lastName}` : (firstName ?? "Unknown User"), // Ensure name is always a string
     email: emailAddresses[0].emailAddress,
     avatar: imageUrl, // Use the first email address
     color: getUserColor(id),
  }
  }
  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.info.email,
      groupIds:[], // Optional
    },
    { userInfo: user.info },
  );

  return new Response(body, { status });
}