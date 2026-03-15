"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  AlertTriangle,
  Compass,
  Home,
  LifeBuoy,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Alert } from "@/components/retroui/Alert";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { useSystemPagesStore } from "@/store/system-pages-store";

type SystemStatusPanelProps = {
  mode: "not-found" | "error";
  onReset?: () => void;
  errorDigest?: string;
};

const tipsByMode = {
  "not-found": [
    "Try navigation from the main menu to locate live pages.",
    "Use the Projects page to browse active repositories and product links.",
    "Open Connect Hub for all social and service destinations.",
  ],
  error: [
    "Tap recovery once to retry this route safely.",
    "If it keeps failing, open Contact and share the digest code.",
    "You can continue browsing Home and Projects while this route recovers.",
  ],
} as const;

async function getSystemTips(mode: "not-found" | "error") {
  await new Promise((resolve) => setTimeout(resolve, 160));
  return tipsByMode[mode];
}

async function createIncidentTicket() {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return `MF-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export function SystemStatusPanel({
  mode,
  onReset,
  errorDigest,
}: SystemStatusPanelProps) {
  const pathname = usePathname();
  const lastPath = useSystemPagesStore((state) => state.lastPath);
  const retryCount = useSystemPagesStore((state) => state.retryCount);
  const setLastPath = useSystemPagesStore((state) => state.setLastPath);
  const incrementRetryCount = useSystemPagesStore(
    (state) => state.incrementRetryCount,
  );
  const clearRetryCount = useSystemPagesStore((state) => state.clearRetryCount);

  useEffect(() => {
    setLastPath(pathname || "/");
  }, [pathname, setLastPath]);

  const {
    data: tips,
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["system-status-tips", mode],
    queryFn: () => getSystemTips(mode),
    staleTime: 5 * 60 * 1000,
  });

  const reportMutation = useMutation({
    mutationKey: ["system-status-report", mode],
    mutationFn: createIncidentTicket,
  });

  const handleRetry = () => {
    incrementRetryCount();
    if (mode === "error" && onReset) {
      onReset();
      return;
    }

    void refetch();
  };

  return (
    <Card className="w-full border-4 border-black bg-card shadow-retro-lg">
      <Card.Header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="surface"
            size="sm"
            className="border-2 border-black font-black uppercase"
          >
            {mode === "not-found" ? "Route Missing" : "Runtime Guard"}
          </Badge>
          <Badge
            variant="outline"
            size="sm"
            className="border-2 border-black bg-muted font-black uppercase"
          >
            Retries {retryCount}
          </Badge>
          <Badge
            variant="outline"
            size="sm"
            className="border-2 border-black bg-muted font-black uppercase"
          >
            Path {lastPath}
          </Badge>
        </div>

        <div className="space-y-2">
          <h2 className="font-display text-2xl uppercase sm:text-3xl">
            {mode === "not-found"
              ? "Retro Route Scanner"
              : "Retro Recovery Console"}
          </h2>
          <p className="text-sm font-semibold leading-relaxed sm:text-base">
            {mode === "not-found"
              ? "This path is not indexed in the current portfolio release."
              : "A runtime issue was detected on this route. Recovery controls are ready."}
          </p>
        </div>
      </Card.Header>

      <Card.Content className="space-y-4 pt-0">
        {mode === "error" ? (
          <Alert
            status="warning"
            className="border-2 border-black bg-accent text-accent-foreground"
          >
            <Alert.Title className="font-black uppercase">
              Error Digest
            </Alert.Title>
            <Alert.Description className="mt-1 text-sm font-semibold">
              {errorDigest ?? "No digest available in this environment."}
            </Alert.Description>
          </Alert>
        ) : null}

        <div className="space-y-2 border-4 border-black bg-muted p-3 sm:p-4">
          <p className="font-pixel text-xs uppercase sm:text-sm">
            System Navigation Tips
          </p>
          {isLoading ? (
            <p className="text-sm font-semibold uppercase">Loading tips...</p>
          ) : (
            <ul className="space-y-2">
              {(tips ?? []).map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-2 text-sm font-medium"
                >
                  <Compass className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Button asChild className="w-full border-4 border-black uppercase">
            <Link href="/">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="w-full border-4 border-black uppercase"
          >
            <Link href="/project">
              <Compass className="h-4 w-4" />
              Projects
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full border-4 border-black uppercase"
          >
            <Link href="/contact">
              <LifeBuoy className="h-4 w-4" />
              Contact
            </Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full border-4 border-black uppercase"
            onClick={handleRetry}
          >
            <RefreshCw className="h-4 w-4" />
            {mode === "not-found" ? "Refresh" : "Recover"}
          </Button>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            type="button"
            variant="secondary"
            className="border-4 border-black uppercase"
            disabled={reportMutation.isPending}
            onClick={() => {
              reportMutation.reset();
              void reportMutation.mutateAsync();
            }}
          >
            <AlertTriangle className="h-4 w-4" />
            {reportMutation.isPending ? "Creating Ticket" : "Create Ticket"}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="border-4 border-black uppercase"
            disabled={retryCount === 0}
            onClick={clearRetryCount}
          >
            Reset Retry Counter
          </Button>
        </div>

        {reportMutation.data ? (
          <Alert
            status="success"
            className="border-2 border-black bg-secondary text-secondary-foreground"
          >
            <Alert.Title className="font-black uppercase">
              Ticket Created
            </Alert.Title>
            <Alert.Description className="mt-1 text-sm font-semibold">
              Incident reference {reportMutation.data}
            </Alert.Description>
          </Alert>
        ) : null}

        {isFetching && !isLoading ? (
          <p className="text-xs font-black uppercase text-muted-foreground">
            Updating tips...
          </p>
        ) : null}
      </Card.Content>
    </Card>
  );
}
