import Pagination from "./Pagination";

interface Props {
  page: number;
  onPageChange: (newPage: number) => void;
  hasNext: boolean;
  children: React.ReactNode;
}

export default function PageSection({
  page,
  onPageChange,
  hasNext,
  children,
}: Props) {
  return (
    <>
      <Pagination page={page} onPageChange={onPageChange} hasNext={hasNext} />
      {children}
      <Pagination page={page} onPageChange={onPageChange} hasNext={hasNext} />
    </>
  );
}
