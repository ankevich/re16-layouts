import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ProductImg = styled.div`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-image: ${(props) => `url(${props.img})`};
  background-position: center -10px;
  margin: 0 20px;
`;

const List = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1px;
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

const ProductPrice = styled.div`
  font-size: 18px;
  color: red;
`

const Button = styled.button`
  color: red;
  background: white;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 24px;
  border: 1px solid red;
  cursor: pointer;
  margin: 0 20px;
`

const Card = ({ product }) => {
  return (
    <List>
      <ProductImg img={product.img} />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductColor>{product.color}</ProductColor>
      <ProductPrice>${product.price}</ProductPrice>
      <Button>Add to cart</Button>
    </List>
  );
};

const ListView = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <Card product={product} />
      ))}
    </Container>
  );
};

export default ListView;
