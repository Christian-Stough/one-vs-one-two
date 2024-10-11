import Client from "./client";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const serverSession = await getServerAuthSession();

  return <Client serverSession={serverSession} />;
}
