"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "~/components/ui/button";
import DiscordIcon from "./_components/icons/discord";
import Image from "next/image";

export default function HomePage() {
  /*
  SESSION:
 { 
  expires: DateTime
  user: {
    email: string,
    id: string,
    image: string,
    name: string
    }
}
  */
  const { data: session } = useSession();

  return (
    <main className="flex h-full w-full">
      {session ? (
        <div className="flex h-full w-full gap-4">
          <div className="just flex h-full w-1/2 items-center justify-center">
            <div className="flex w-fit flex-col gap-2">
              <div className="w-full text-center text-4xl font-semibold">
                {session.user.name}
              </div>

              <div className="h-fit w-fit rounded-sm border-4 border-black">
                {session.user.image ? (
                  <Image
                    alt="profile"
                    src={session.user.image}
                    height={400}
                    width={400}
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className="just flex h-full w-1/2 items-center justify-center">
            <div className="flex flex-col gap-4">
              <Button size="lg" className="w-[400px] py-6 text-white">
                Join Lobby
              </Button>
              <Button size="lg" variant="outline" className="w-[400px] py-6">
                Create New Lobby
              </Button>
              <Button
                size="lg"
                variant="destructive"
                className="w-[400px] py-6 text-white"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Button
            size="lg"
            className="relative w-[400px] py-6 text-white"
            onClick={() => signIn("discord")}
          >
            <DiscordIcon className="top-4.5 absolute left-4 size-6 text-white" />{" "}
            Sign In With Discord
          </Button>
        </div>
      )}
    </main>
  );
}
