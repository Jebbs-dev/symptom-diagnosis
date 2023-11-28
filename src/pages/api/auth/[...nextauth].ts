import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";

// const handler = NextAuth({
//   ...
// })

// export { handler as GET, handler as POST }


export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID),
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
    }),
    // Github({}),
    // Twitter({}),
  ],
});
