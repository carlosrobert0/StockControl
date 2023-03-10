import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectProducts } from "../../../../redux/productSlice";
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
  const { register, setValue, formState: { errors } } = useFormContext<NewProductFormData>()
  const router = useParams()
  const navigate = useNavigate()
  const { id } = router
  const products = useSelector(selectProducts)
  
  function navigateToBack() {
    navigate("/products")
  }

  let product = products.find((product: any) => product.id === id)

  return (
    <FormContainer>
      <p>Atenção: Você só pode alterar os campos vazios</p>
      <div>
        <label htmlFor="name">Nome:</label>
        <div>
          <Input
            id="name"
            {...register("name")}
            type="text"
            value={product?.name}
            onChange={(e: any) => setValue("name", e.target.value)}
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
            {...register("price", { valueAsNumber: true })}
            type="number"
            onChange={(e: any) => setValue("price", e.target.value)}
            placeholder="Preço"
          />
          {errors.price && <OverlayTooltip message={errors.price.message} />}
        </div>
      </div>
      <div>
        <label htmlFor="quantity">Quant.:</label>
        <div>
          <Input
            id="quantity"
            {...register("quantity", { valueAsNumber: true })}
            type="number"
            onChange={(e: any) => setValue("quantity", e.target.value)}
            placeholder="Quantidade"
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
            onChange={(e: any) => setValue("category", e.target.value)}
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
            onChange={(e: any) => setValue("description", e.target.value)}
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