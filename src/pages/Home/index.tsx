import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/productSlice";
import { CardDashboard } from "./components/CardDashboard";
import { HomeContainer } from "./styles";

export function Home() {
  const products = useSelector(selectProducts)

  let totalProducts = products?.length

  const productSmallerQuantity = products?.reduce((productSmaller: any, productCurrent: any) => {
    if (productCurrent.quantity < productSmaller.quantity) {
      return productCurrent;
    } else {
      return productSmaller;
    }
  });

  const productGreaterQuantity = products?.reduce((productGreater: any, productCurrent: any) => {
    if (productCurrent.quantity > productGreater.quantity) {
      return productCurrent;
    } else {
      return productGreater;
    }
  });
  
  return (
    <HomeContainer>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
        <CardDashboard value={String(totalProducts)} description="Produtos cadastrados" />
        <CardDashboard value={productGreaterQuantity?.name} description="Produto com maior quantidade" />
        <CardDashboard value={productSmallerQuantity?.name} description="Produto com menor quantidade" />
      </div>
    </HomeContainer>
  )
}