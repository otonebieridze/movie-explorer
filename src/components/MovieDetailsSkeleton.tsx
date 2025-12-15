export default function MovieDetailsSkeleton() {
  return (
    <div className="p-4 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
      <div className="h-96 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
      <div className="h-20 bg-gray-300 rounded"></div>
    </div>
  );
}
