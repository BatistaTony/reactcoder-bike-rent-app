import {
  PaginationButton,
  PaginationContainer,
  PaginationList,
  PaginationListItem,
} from "./styles";

interface PaginationProps {
  page: number;
  pages: number[];
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleActivePage: (page: number) => void;
}

const Pagination = ({
  handleActivePage,
  handleNextPage,
  handlePrevPage,
  page,
  pages,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={handlePrevPage}>prev</PaginationButton>
      <PaginationList>
        {pages.map((item) => (
          <PaginationListItem
            onClick={() => handleActivePage(item + 1)}
            active={page === item + 1}
            key={item + 1}
          >
            {item + 1}
          </PaginationListItem>
        ))}
      </PaginationList>
      <PaginationButton onClick={handleNextPage}>next</PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
