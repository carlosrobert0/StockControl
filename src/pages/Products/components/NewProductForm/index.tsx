import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Router, useNavigate } from "react-router-dom";
import { NewProductFormData } from "../../create";
import { OverlayTooltip } from "../OverlayTooltip";

import {
  CancelButton,
  FormContainer,
  Input,
  NewProductButton,
  WrapperButtons
} from "./styles";

export function NewProductForm() {
  const { register, formState: { errors } } = useFormContext<NewProductFormData>()

  const navigate = useNavigate()

  function navigateToBack() {
    navigate("/products")
  }

  return (
    <FormContainer>
      <div>
        <label htmlFor="name">Nome:</label>
        <div>
          <Input
            id="name"
            {...register("name")}
            type="text"
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
          Cadastrar
        </NewProductButton>
      </WrapperButtons>
    </FormContainer>
  )
}