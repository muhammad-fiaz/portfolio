import { RetroContentLoading } from "@/components/portfolio/retro-content-loading";

export default function Loading() {
  return (
    <div className="py-4 sm:py-8">
      <RetroContentLoading
        title="Booting Workspace"
        message="Loading data. Please wait while the terminal authenticates."
      />
    </div>
  );
}
