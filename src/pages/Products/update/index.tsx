import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'

import { NewProductForm } from "../components/NewProductForm";
import { UpdateProductContainer } from "./styles";
import { useContext, useState } from "react";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import { ProductsContext } from "../../../contexts/ProductsContext";
import { UpdateProductForm } from "../components/UpdateProductForm";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../redux/productSlice";

const newProductFormValidationSchema = zod.object({
  name: zod.string().min(1, 'Este campo é obrigatório.'),
  price: zod.string().min(1, 'Este campo é obrigatório.'),
  category: zod.string().min(1, 'Este campo é obrigatório.'),
  description: zod.string().min(1, 'Este campo é obrigatório.'),
})

export type NewProductFormData = zod.infer<typeof newProductFormValidationSchema>

export function UpdateProduct() {
  const navigate = useNavigate()
  const { id } = useParams()
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

  function handleUpdateProduct(data: NewProductFormData) {
    dispatch(updateProduct(data))
    reset()

    navigate('/products')
  }

  const { handleSubmit, reset } = newProductForm

  return (
    <UpdateProductContainer>
      <h1>Editar produto</h1>

      <form onSubmit={handleSubmit(handleUpdateProduct)}>
        <FormProvider {...newProductForm}>
          <UpdateProductForm />
        </FormProvider>
      </form>      
    </UpdateProductContainer>
  )
}