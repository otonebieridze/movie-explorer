interface Props {
  page: number;
  onPageChange: (newPage: number) => void;
  hasNext?: boolean;
}

export default function Pagination({ page, onPageChange, hasNext }: Props) {
  return (
    <div className="flex justify-center gap-4 mt-8 mb-5">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2">Page {page}</span>
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNext}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
