import { FormEvent } from "react";
import styled from "styled-components";

const ShortAndFilterContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #3a643b;
  padding: 8px;
  margin-bottom: 36px;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    font-weight: small;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const ShortAndFilter = ({
  handlePriceFiltering,
  handleCategoryFiltering,
}: {
  handleCategoryFiltering: (event: FormEvent<HTMLSelectElement>) => void;
  handlePriceFiltering: (event: FormEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <ShortAndFilterContainer>
      <PriceContainer>
        <Label>Price: </Label>
        <Select onChange={handlePriceFiltering}>
          <option value="" disabled selected>
            Select Price
          </option>
          <option value="All">All</option>
          <option value="1-50">$1 to $50</option>
          <option value="50-100">$50 to $100</option>
          <option value="100-200">$100 ot $200</option>
          <option value="201">Over $200 </option>
        </Select>
      </PriceContainer>
      <PriceContainer>
        <Label>Category: </Label>
        <Select onChange={handleCategoryFiltering}>
          <option value="" disabled selected>
            Select Category
          </option>
          <option value="All">All</option>
          <option value="Earbuds">Earbuds</option>
          <option value="Electronics">Electronics</option>
          <option value="AppleWatch">Apple Watch</option>
          <option value="AppleWatchSeries">Apple Watch Series </option>
        </Select>
      </PriceContainer>
    </ShortAndFilterContainer>
  );
};

export default ShortAndFilter;
