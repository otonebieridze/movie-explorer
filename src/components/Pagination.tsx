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
        className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 disabled:opacity-50 hover:bg-neutral-50"
      >
        Previous
      </button>
      <span className="px-4 py-2">Page {page}</span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNext}
        className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 disabled:opacity-50 hover:bg-neutral-50"
      >
        Next
      </button>
    </div>
  );
}
