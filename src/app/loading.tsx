export default function Loading() {
  return (
    <div className="fixed inset-0 z-80 flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-lg border-4 border-black bg-card p-4 shadow-retro-lg sm:p-6">
        <p className="font-pixel text-2xl uppercase text-foreground sm:text-3xl">
          Muhammad Fiaz
        </p>
        <p className="mt-2 text-sm font-black uppercase text-muted-foreground sm:text-base">
          Booting workspace...
        </p>
        <div className="mt-5 h-7 border-4 border-black bg-muted p-1 sm:h-8">
          <div className="h-full w-full animate-pulse border-2 border-black bg-primary" />
        </div>
      </div>
    </div>
  );
}
