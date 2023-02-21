import { Pencil, Plus, Trash } from "phosphor-react";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "styled-components";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ProductsContainer, ProductsList } from "./styles";

export function Products() {
  const theme = useTheme()
  const { products } = useContext(ProductsContext)

  return (
    <ProductsContainer>
      <div>
        <h1>Produtos</h1>
        <NavLink to="/products/create" title="Novo produto" end>
          <Plus size={24} color={theme.colors.gray_dark} weight="bold" />
        </NavLink>
      </div>


      <ProductsList>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Descrição</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {products?.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>
                  <div>
                    <Pencil size={20} weight="thin" />
                    <Trash size={20} weight="thin" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ProductsList>
    </ProductsContainer>
  )
}