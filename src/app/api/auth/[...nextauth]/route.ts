import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID ?? "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET ?? "",
    }),
  ],
  // Add any other NextAuth.js configurations here
});

export { handler as GET, handler as POST };
