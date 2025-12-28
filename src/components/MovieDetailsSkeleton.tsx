export default function MovieDetailsSkeleton() {
  return (
    <div className="flex flex-col md:flex-row animate-pulse">
      <div className="md:w-1/3">
        <div className="w-full h-[450px] bg-gray-300 dark:bg-neutral-700 rounded" />
      </div>

      <div className="md:w-2/3 p-6 space-y-4">
        <div className="h-8 w-2/3 bg-gray-300 dark:bg-neutral-700 rounded" />
        <div className="h-4 w-1/3 bg-gray-300 dark:bg-neutral-700 rounded" />
        <div className="h-4 w-1/4 bg-gray-300 dark:bg-neutral-700 rounded" />
        <div className="h-20 w-full bg-gray-300 dark:bg-neutral-700 rounded" />
        <div className="h-10 w-40 bg-gray-300 dark:bg-neutral-700 rounded" />
      </div>
    </div>
  );
}
