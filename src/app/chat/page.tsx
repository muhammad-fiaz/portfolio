import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ChatHeader } from '@/components/sections/chat-header';
import { ChatInterface } from '@/components/sections/chat-interface';
import { siteConfig } from '@/config/site.config';

export const metadata = {
  title: `Chat | ${siteConfig.siteName}`,
  description: 'Have a private conversation with Muhammad Fiaz using GitHub Discussions.',
};

export default function ChatPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 mt-16 md:mt-24">
        <ChatHeader />
        <Suspense fallback={<ChatSkeleton />}>
          <ChatInterface />
        </Suspense>
      </div>
    </div>
  );
}

function ChatSkeleton() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-primary/5 via-background/50 to-background/20 backdrop-blur-sm border-primary/20 rounded-xl p-6">
        <Skeleton className="h-6 w-1/3 mb-4" />
        <div className="flex flex-col gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-2 max-w-[70%]">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="flex-1 h-10 rounded-lg" />
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <Skeleton className="flex-1 h-10 rounded-lg" />
          <Skeleton className="h-10 w-20 rounded-lg" />
        </div>
      </div>
      <div className="inline-block bg-gradient-to-r from-secondary/5 to-primary/5 border-border/50 p-6 rounded-xl">
        <Skeleton className="h-5 w-1/4 mb-2" />
        <Skeleton className="h-4 w-2/3 mb-2" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}
