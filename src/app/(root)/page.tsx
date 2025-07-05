import { FloatingNav } from "@/components/landingPage/FloatingNav";
import Hero from "@/components/landingPage/Hero"; 
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import Link from "next/link";
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Features", link: "#features" },
  { name: "Connect", link: "#connect" },
];

export default async function LandingPage() {
  const clerkUser = await currentUser();

  // ✅ If logged in, redirect to /home
  if (clerkUser) redirect("/home");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <FloatingNav navItems={navItems} />
        <Hero/>
  {/* <h1 className="text-4xl font-bold mb-4">Welcome to Coflow</h1>
  <p className="text-lg mb-6">Collaborate easily on documents in real-time.</p> */}

  
</main>

  );
}
