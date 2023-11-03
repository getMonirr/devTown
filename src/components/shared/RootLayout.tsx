import { ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 6px;
  padding-right: 6px;

  @media (min-width: 768px) {
    max-width: 768px !important;
  }

  @media (min-width: 1024px) {
    max-width: 1024px !important;
  }

  @media (min-width: 1280px) {
    max-width: 1280px !important;
  }

  @media (min-width: 1536px) {
    max-width: 1536px !important;
  }
`;

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <Layout>{children}</Layout>;
};

export default RootLayout;
