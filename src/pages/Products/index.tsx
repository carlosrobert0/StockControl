import { Pencil, Plus, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { ProductsContext } from "../../contexts/ProductsContext";
import { deleteProduct, selectProducts } from "../../redux/productSlice";
import ModalDialogConfirm from "./components/DialogModal";
import { ProductsContainer, ProductsList } from "./styles";

export function Products() {
  const theme = useTheme()
  const [showModal, setShowModal] = useState(false);
  const products = useSelector(selectProducts)
  const [productIdSelected, setProductIdSelected] = useState<any>()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handleConfirm(productId: string) {
    dispatch(deleteProduct(productId));
    setShowModal(false);
  };

  function handleCancel() {
    setShowModal(false);
  };
  
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
            {products?.map((product: any) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>
                  <div>
                    <Pencil 
                      size={20} 
                      weight="thin"
                      onClick={() => navigate(`/products/update/${product.id}`)} 
                    />
                    <Trash
                      size={20}
                      weight="thin"
                      onClick={() => {setShowModal(true); setProductIdSelected(product.id)}}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ProductsList>
      {showModal && (
        <ModalDialogConfirm
          title="Confirmação"
          message="Tem certeza que deseja continuar?"
          onConfirm={() => handleConfirm(productIdSelected)}
          onCancel={handleCancel}
        />
      )}
    </ProductsContainer>
  )
}