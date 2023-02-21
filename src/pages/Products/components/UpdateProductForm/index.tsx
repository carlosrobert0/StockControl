import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Router, useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../../../contexts/ProductsContext";
import { NewProductFormData } from "../../create";
import { OverlayTooltip } from "../OverlayTooltip";

import {
  CancelButton,
  FormContainer,
  Input,
  NewProductButton,
  WrapperButtons
} from "./styles";

export function UpdateProductForm() {
  const { register, formState: { errors } } = useFormContext<NewProductFormData>()
  const router = useParams()
  const navigate = useNavigate()
  const { id } = router
  const { products } = useContext(ProductsContext) 

  function navigateToBack() {
    navigate("/products")
  }

  let product = products.find(product => product.id === id)

  console.log(product)

  return (
    <FormContainer>
      <div>
        <label htmlFor="name">Nome:</label>
        <div>
          <Input
            id="name"
            {...register("name")}
            type="text"
            value={product?.name}
            placeholder="Nome"
          />
          {errors.name && <OverlayTooltip message={errors.name.message} />}
        </div>
      </div>
      <div>
        <label htmlFor="price">Preço:</label>
        <div>
          <Input
            id="price"
            {...register("price")}
            type="text"
            value={product?.price}
            placeholder="Preço"
          />
          {errors.price && <OverlayTooltip message={errors.price.message} />}
        </div>
      </div>
      <div>
        <label htmlFor="category">Categoria:</label>
        <div>
          <Input
            id="category"
            {...register("category")}
            value={product?.category}
            type="text"
            placeholder="Categoria"
          />
          {errors.category && <OverlayTooltip message={errors.category.message} />}
        </div>
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <div>
          <Input
            id="description"
            {...register("description")}
            type="text"
            value={product?.description}
            placeholder="Descrição"
          />
          {errors.description && <OverlayTooltip message={errors.description.message} />}
        </div>
      </div>
      <WrapperButtons>
        <CancelButton
          type="button"
          onClick={navigateToBack}
        >
          Cancelar
        </CancelButton>
        <NewProductButton
          disabled={false}
          type="submit"
        >
          Atualizar
        </NewProductButton>
      </WrapperButtons>
    </FormContainer>
  )
}