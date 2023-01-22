const CardsView = ({ products }) =>
  products.map((product) => {
    return <>{product.name}</>;
  });

export default CardsView;
