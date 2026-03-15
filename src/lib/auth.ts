import { betterAuth } from "better-auth";
import { memoryAdapter } from "better-auth/adapters/memory";

const memoryDb = {
  user: [],
  session: [],
  account: [],
  verification: [],
};

export const auth = betterAuth({
  appName: "Muhammad Fiaz Portfolio",
  secret:
    process.env.BETTER_AUTH_SECRET ??
    process.env.NEXTAUTH_SECRET ??
    "dev-only-secret-change-in-production",
  baseURL:
    process.env.BETTER_AUTH_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000",
  database: memoryAdapter(memoryDb),
  socialProviders:
    process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET
      ? {
          github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
          },
        }
      : undefined,
});
