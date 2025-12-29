interface Props {
  page: number;
  onPageChange: (newPage: number) => void;
  hasNext?: boolean;
}

export default function Pagination({ page, onPageChange, hasNext }: Props) {
  return (
    <div className="flex justify-center gap-4 my-8">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors
          ${
            page <= 1
              ? "border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-700 text-neutral-400 cursor-not-allowed"
              : "border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
          }`}
      >
        ← Previous
      </button>

      <span className="px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium">
        Page {page}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNext}
        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors
          ${
            !hasNext
              ? "border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-700 text-neutral-400 cursor-not-allowed"
              : "border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
          }`}
      >
        Next →
      </button>
    </div>
  );
}
