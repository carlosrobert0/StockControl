import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/productSlice";
import { CardDashboard } from "./components/CardDashboard";
import { HomeContainer } from "./styles";

export function Home() {
  const products = useSelector(selectProducts)

  let totalProducts = products.length
  
  return (
    <HomeContainer>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
        <CardDashboard value={String(totalProducts)} description="Produtos cadastrados" />
        <CardDashboard value="Lápis" description="Produto com maior quantidade" />
        <CardDashboard value="Bicicleta" description="Produto com menor quantidade" />
      </div>
    </HomeContainer>
  )
}