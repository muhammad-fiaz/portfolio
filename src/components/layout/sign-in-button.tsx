"use client";

import { Github, LogOut } from "@/components/retroui/icons";
import { useRouter } from "next/navigation";
import { Avatar } from "@/components/retroui/Avatar";
import { Button } from "@/components/retroui/Button";
import { authClient } from "@/lib/auth-client";

type SessionUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  avatarUrl?: string | null;
};

export function SignInButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user as SessionUser | undefined;

  const handleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: window.location.pathname,
      });
      router.refresh();
    } catch {
      window.location.href =
        "/api/auth/sign-in/social?provider=github&callbackURL=/";
    }
  };

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
    } finally {
      router.refresh();
    }
  };

  if (user) {
    const initialsSource =
      user.name?.trim() || user.email?.trim() || "Muhammad Fiaz";
    const initials = initialsSource
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
    const avatarSrc = user.image ?? user.avatarUrl ?? undefined;

    return (
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10 border-4 border-black shadow-retro-sm">
          {avatarSrc ? (
            <Avatar.Image src={avatarSrc} alt={user.name ?? "User"} />
          ) : null}
          <Avatar.Fallback className="text-xs font-black uppercase">
            {initials || "MF"}
          </Avatar.Fallback>
        </Avatar>
        <Button
          onClick={handleSignOut}
          variant="secondary"
          className={className}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={handleSignIn} variant="default" className={className}>
      <Github className="mr-2 h-4 w-4" />
      Sign In
    </Button>
  );
}
