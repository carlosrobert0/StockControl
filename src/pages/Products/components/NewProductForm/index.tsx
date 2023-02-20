import { useFormContext } from "react-hook-form";
import { Router, useNavigate } from "react-router-dom";

import {
  CancelButton,
  FormContainer,
  Input,
  NewProductButton,
  WrapperButtons
} from "./styles";

export function NewProductForm() {
  const { register } = useFormContext()
  const navigate = useNavigate()

  function navigateToBack() {
    navigate("/products")
  }

  return (
    <FormContainer>
      <div>
        <label htmlFor="name">Nome:</label>
        <Input
          id="name"
          {...register("name")}
          type="text"
          placeholder="Nome"
        />
      </div>
      <div>
        <label htmlFor="price">Preço:</label>
        <Input
          id="price"
          {...register("price")}
          type="number"
          placeholder="Preço"
        />
      </div>
      <div>
        <label htmlFor="category">Categoria:</label>
        <Input
          id="category"
          {...register("category")}
          type="text"
          placeholder="Categoria"
        />
      </div>
      <div>
        <label htmlFor="description">Descrição:</label>
        <Input
          id="description"
          {...register("description")}
          type="text"
          placeholder="Descrição"
        />
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