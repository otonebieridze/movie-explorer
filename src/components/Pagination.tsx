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
        className="rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-neutral-800 dark:text-neutral-100 disabled:opacity-50 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
      >
        Previous
      </button>
      <span className="px-4 py-2 text-neutral-800 dark:text-neutral-200">
        Page {page}
      </span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNext}
        className="rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-3 py-2 text-sm text-neutral-800 dark:text-neutral-100 disabled:opacity-50 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
      >
        Next
      </button>
    </div>
  );
}
