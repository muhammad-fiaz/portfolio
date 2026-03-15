type RetroContentLoadingProps = {
  title: string;
  message: string;
};

const LOADING_CARD_KEYS = ["l1", "l2", "l3", "l4", "l5", "l6"] as const;

export function RetroContentLoading({
  title,
  message,
}: RetroContentLoadingProps) {
  return (
    <div className="space-y-6 pb-16">
      <section className="border-4 border-black bg-card p-4 shadow-retro-lg sm:p-6 md:p-8">
        <h2 className="font-pixel text-3xl uppercase sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed sm:text-base">
          {message}
        </p>
      </section>

      <section className="space-y-4" aria-live="polite" aria-busy="true">
        <div className="border-4 border-black bg-card p-4 shadow-retro-sm">
          <div className="h-11 w-full animate-pulse border-4 border-black bg-muted" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOADING_CARD_KEYS.map((key) => (
            <article
              key={key}
              className="space-y-3 border-4 border-black bg-card p-4 shadow-retro-md"
            >
              <div className="h-5 w-2/3 animate-pulse border-2 border-black bg-muted" />
              <div className="h-4 w-full animate-pulse border-2 border-black bg-muted" />
              <div className="h-4 w-5/6 animate-pulse border-2 border-black bg-muted" />
              <div className="h-8 w-full animate-pulse border-2 border-black bg-muted" />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
