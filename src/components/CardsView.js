import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  img {
    width: 300px;
    height: 300px;
  }
`;

const CardBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const ProductTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0;

`

const ProductColor = styled.div`
  font-size: 12px;
  opacity: 0.5;
`

const Horizontal = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Price = styled.div`
  font-size: 18px;
  color: red;
`

const Button = styled.button`
  color: red;
  background: white;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
  border-radius: 24px;
  border: 1px solid red;
  cursor: pointer;
`

const Card = ({ product }) => {
  return (
    <CardBackground background={product.img}>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductColor>{product.color}</ProductColor>
      <Horizontal>
        <Price>${product.price}</Price>
        <Button>Add to card</Button>
      </Horizontal>
    </CardBackground>
  );
};

const CardsView = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <Card product={product} />
      ))}
    </Container>
  );
};

export default CardsView;
