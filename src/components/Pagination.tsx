import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 98px;
  margin-bottom: 50px;
  gap: 16px;
`;

interface PageButtonProps {
  selected?: boolean;
}

const PageButton = styled.button<PageButtonProps>`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background: ${(props) => (props.selected ? "#3a643b" : "#135fb4")};
  color: #ffffff;
  box-shadow: ${(props) =>
    props.selected
      ? "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
      : "0px 5px 10px 0px rgba(0, 0, 0, 0.1)"};
  cursor: pointer;
  padding: 20px;

  &:hover,
  &:active,
  &:focus {
    width: 30px;
    height: 30px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    background: #3a643b;
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

interface PaginationProps {
  currentPage: number;
  productsPerPage: number;
  totalProducts: number;
  handlePageChange: (newPage: number) => void;
}

const Pagination = ({
  currentPage,
  productsPerPage,
  totalProducts,
  handlePageChange,
}: PaginationProps) => {
  const pageNumbers = Math.ceil(totalProducts / productsPerPage);

  // generate pagination buttons
  const renderPageNumbers = () => {
    const pageNumbersArray = Array.from(
      { length: pageNumbers },
      (_, index) => index + 1
    );
    return pageNumbersArray.map((number) => (
      <PageButton
        key={number}
        selected={currentPage === number}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </PageButton>
    ));
  };

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </PageButton>
      {renderPageNumbers()}
      <PageButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageNumbers}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
