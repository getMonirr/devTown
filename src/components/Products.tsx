import styled from "styled-components";
import RootLayout from "./shared/RootLayout";
import SingleProduct from "./SingleProduct";
import { FormEvent, useState } from "react";
import ShortAndFilter from "./ShortAndFilter";
import Pagination from "./Pagination";
import allProducts from "../DB/allProduct";

const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 32px;
  justify-content: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const SectionStart = styled.section`
  text-align: center;
  padding: 16px;
  margin-bottom: 18px;
  margin-top: 18px;
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 8px;
`;
const SectionDescription = styled.h2`
  width: 100%;
  font-size: 18px;
  color: #bababa;

  @media (min-width: 768px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;

interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const Products = () => {
  const [products, setProducts] = useState<product[]>(allProducts);

  // handle product filtering
  const handlePriceFiltering = (e: FormEvent<HTMLSelectElement>) => {
    const priceRange = (e.target as HTMLSelectElement).value;
    const [low, high] = priceRange.split("-");

    if (priceRange === "All") {
      setProducts(allProducts);
      return;
    }

    if (high === undefined) {
      const filteredProducts = allProducts.filter(
        (p: product) => p.price >= parseInt(low)
      );
      setProducts(filteredProducts);
      return;
    }

    const filteredProducts = allProducts.filter(
      (p: product) => p.price >= parseInt(low) && p.price <= parseInt(high)
    );
    setProducts(filteredProducts);
  };

  // handle products filtering by category
  const handleCategoryFiltering = (e: FormEvent<HTMLSelectElement>) => {
    const category = (e.target as HTMLSelectElement).value;

    if (category === "All") {
      setProducts(allProducts);
      return;
    }

    const filteredProducts = allProducts.filter(
      (p: product) => p.category === category
    );

    setProducts(filteredProducts);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <RootLayout>
      <SectionStart>
        <SectionTitle>DevTown Product</SectionTitle>
        <SectionDescription>
          Here is our All products. you can purchase and use them. Please visit
          our. you can all browse them within our website. our website is fully
          responsive with all devices.
        </SectionDescription>
      </SectionStart>
      <ShortAndFilter
        handleCategoryFiltering={handleCategoryFiltering}
        handlePriceFiltering={handlePriceFiltering}
      />
      <ProductContainer>
        {currentProducts.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </ProductContainer>
      <Pagination
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        handlePageChange={handlePageChange}
      />
    </RootLayout>
  );
};

export default Products;
