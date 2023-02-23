import { Pencil, Plus, Trash } from "phosphor-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { deleteProduct, selectProducts } from "../../redux/productSlice";
import ModalDialogConfirm from "./components/DialogModal";
import { InputSearch, ProductsContainer, ProductsList, WrapperCheckbox } from "./styles";

export function Products() {
  const theme = useTheme()
  const [showModal, setShowModal] = useState(false);
  const [checkedName, setCheckedName] = useState(false);
  const [checkedCategory, setCheckedCategory] = useState(false);
  const [checkedPrice, setCheckedPrice] = useState(false);
  const [search, setSearch] = useState('')
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

  let filteredProducts: any

  if (checkedName) {
    filteredProducts = search.length > 0
      ? products?.filter((product: any) => product.name.toUpperCase().includes(search.toUpperCase()))
      : []
  } else if (checkedCategory) {
    filteredProducts = search.length > 0
      ? products?.filter((product: any) => product.category.toUpperCase().includes(search.toUpperCase()))
      : []
  } else if (checkedPrice) {
    filteredProducts = search.length > 0
      ? products?.filter((product: any) => product.price.toString().includes(search))
      : []
  } else {
    filteredProducts = search.length > 0
      ? products?.filter((product: any) => product.name.toUpperCase().includes(search.toUpperCase()))
      : []
  }


  return (
    <ProductsContainer>
      <div>
        <div>
          <h1>Produtos</h1>
          <WrapperCheckbox>
            <div>
              <label>
                <input
                  checked={checkedName}
                  name="name"
                  onChange={() => setCheckedName(!checkedName)}
                  type="checkbox"
                />
                Nome
              </label>
            </div>
            <div>
              <label>
                <input
                  checked={checkedPrice}
                  name="price"
                  onChange={() => setCheckedPrice(!checkedPrice)}
                  type="checkbox"
                />
                Preço
              </label>
            </div>
            <div>
              <label>
                <input
                  checked={checkedCategory}
                  name="category"
                  onChange={() => setCheckedCategory(!checkedCategory)}
                  type="checkbox"
                />
                Categoria
              </label>
            </div>
          </WrapperCheckbox>
          <InputSearch
            name="search"
            type="text"
            placeholder="Buscar..."
            onChange={(e: any) => setSearch(e.target.value)}
            value={search}
          />
        </div>
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
              <th>Quantidade</th>
              <th>Categoria</th>
              <th>Descrição</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {
              search.length > 0 ?
                filteredProducts?.map((product: any) => (
                  <tr key={product?.id}>
                    <td>{product?.name}</td>
                    <td>R$ {product?.price}</td>
                    <td>{product?.quantity}</td>
                    <td>{product?.category}</td>
                    <td>{product?.description}</td>
                    <td>
                      <div>
                        <Pencil
                          size={20}
                          weight="thin"
                          onClick={() => navigate(`/products/update/${product?.id}`)}
                        />
                        <Trash
                          size={20}
                          weight="thin"
                          onClick={() => { setShowModal(true); setProductIdSelected(product?.id) }}
                        />
                      </div>
                    </td>
                  </tr>
                )) :
                products?.map((product: any) => (
                  <tr key={product?.id}>
                    <td>{product?.name}</td>
                    <td>R$ {product?.price}</td>
                    <td>{product?.quantity}</td>
                    <td>{product?.category}</td>
                    <td>{product?.description}</td>
                    <td>
                      <div>
                        <Pencil
                          size={20}
                          weight="thin"
                          onClick={() => navigate(`/products/update/${product?.id}`)}
                        />
                        <Trash
                          size={20}
                          weight="thin"
                          onClick={() => { setShowModal(true); setProductIdSelected(product?.id) }}
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