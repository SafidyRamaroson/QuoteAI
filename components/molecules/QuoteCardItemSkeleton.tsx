import { Skeleton } from "@/components/ui/skeleton";

export function QuoteCardItemSkeleton() {
  return (
    <div className="relative p-6 rounded-xl bg-primary space-y-4">
      {/* Header */}
      <div className="flex flex-row items-center justify-between">
        <Skeleton className="h-4 w-16 rounded" />
        <div className="flex flex-row items-center gap-2">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-4 rounded" />
        </div>
      </div>

      {/* Quote text */}
      <Skeleton className="h-6 w-3/4 rounded" />
      <Skeleton className="h-6 w-5/6 rounded" />
      <Skeleton className="h-6 w-2/3 rounded" />

      {/* Author info */}
      <div className="flex items-center gap-3 mt-2">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-24 rounded" />
        </div>
      </div>
    </div>
  );
}
