"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <main className="flex h-full flex-col items-center justify-center">
        <h1 className="text-4xl">Welcome to the homepage</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    );
  }

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h1 className="text-4xl">Welcome to the homepage</h1>
      <button onClick={() => signIn()}>Sign in</button>
    </main>
  );
}
