import Menu from "../../components/Menu";
import ProductsList from "../../components/ProductsList";
import { useProducts } from "../../providers/Products";

const Home = () => {
  const { products } = useProducts();

  return (
    <>
      <Menu />
      <ProductsList products={products} />
    </>
  );
};

export default Home;
