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
            onClick={() => handleActivePage(item)}
            active={page === item}
            key={item}
          >
            {item}
          </PaginationListItem>
        ))}
      </PaginationList>
      <PaginationButton onClick={handleNextPage}>next</PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
