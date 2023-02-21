import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import { CardDashboard } from "./components/CardDashboard";
import { HomeContainer } from "./styles";

export function Home() {
  const { products } = useContext(ProductsContext)

  let totalProducts = products.length
  
  return (
    <HomeContainer>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
        <CardDashboard value={String(totalProducts)} description="Produtos cadastrados" />
        <CardDashboard value="20" description="Produto com maior quantidade" />
        <CardDashboard value="20" description="Produto com menor quantidade" />
      </div>
    </HomeContainer>
  )
}