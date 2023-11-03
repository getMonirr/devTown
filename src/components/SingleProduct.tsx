import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled.div`
  background-color: white;
  padding-left: 36px;
  padding-right: 36px;
  padding-top: 18px;
  padding-bottom: 36px;
  text-align: left;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 10px 15px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  object-position: center;
  margin-left: auto;
  margin-right: auto;
  display: block;

  transition: all 0.3s ease-in-out;

  ${Card}:hover & {
    transform: scale(0.8);
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #747474;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #bababa;
`;

const Price = styled.h3`
  font-size: 18px;
  color: #747474;
  font-weight: bold;
  margin-top: 16px;
`;

const AddCardButton = styled.button`
  width: 100%;
  padding: 10px 25px;
  background-color: #3a643b;
  text-transform: uppercase;
  border-radius: 100px;
  border: 1px solid transparent;
  color: white;
  cursor: pointer;
  margin-top: 24px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: white;
    border: 1px solid #3a643b;
    color: #3a643b;
  }
`;

const Category = styled.h4`
  font-size: 12px;
  border-radius: 100px;
  color: black;
  text-align: right;
  border: 1px solid #3a643b;
  padding: 4px;
  width: fit-content;
`;

const Span = styled.span`
  font-size: 12px;
`;

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const SingleProduct = ({ product }: { product: ProductProps }) => {
  const { title, description, price, category, image } = product;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <Card>
          <Category>
            <Span>Category:</Span> {category}
          </Category>
          <CardImage src={image} />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Price>
            <span>$</span> {price} USD
          </Price>

          <AddCardButton>Add to Cart</AddCardButton>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SingleProduct;
