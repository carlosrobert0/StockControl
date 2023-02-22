import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'

import { NewProductForm } from "../components/NewProductForm";
import { CreateProductContainer } from "./styles";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/productSlice";

const newProductFormValidationSchema = zod.object({
  name: zod.string().min(1, 'Este campo é obrigatório.'),
  price: zod.string().min(1, 'Este campo é obrigatório.'),
  category: zod.string().min(1, 'Este campo é obrigatório.'),
  description: zod.string().min(1, 'Este campo é obrigatório.'),
})

export type NewProductFormData = zod.infer<typeof newProductFormValidationSchema>

export function CreateProduct() {
  const navigate = useNavigate()
  const { createNewProduct } = useContext(ProductsContext)
  const dispatch = useDispatch()

  const newProductForm = useForm<NewProductFormData>({
    resolver: zodResolver(newProductFormValidationSchema),
    defaultValues: {
      name: '',
      price: '',
      category: '',
      description: ''
    }
  })

  function handleCreateNewProduct(data: NewProductFormData) {
    // createNewProduct(data)
    dispatch(addProduct(data))
    reset()

    navigate('/products')
  }

  const { handleSubmit, reset } = newProductForm

  return (
    <CreateProductContainer>
      <h1>Criar novo produto</h1>

      <form onSubmit={handleSubmit(handleCreateNewProduct)}>
        <FormProvider {...newProductForm}>
          <NewProductForm />
        </FormProvider>
      </form>      
    </CreateProductContainer>
  )
}