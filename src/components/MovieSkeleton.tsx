export default function MovieSkeleton() {
  return (
    <li className="bg-gray-200 dark:bg-neutral-800 rounded p-2 animate-pulse">
      <div className="h-64 bg-gray-300 dark:bg-neutral-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded w-3/4 mb-1"></div>
      <div className="h-3 bg-gray-300 dark:bg-neutral-700 rounded w-1/2"></div>
    </li>
  );
}
