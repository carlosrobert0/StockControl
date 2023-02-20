import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'

import { NewProductForm } from "../components/NewProductForm";
import { CreateProductContainer } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const newProductFormValidationSchema = zod.object({
  name: zod.string(),
  price: zod.number(),
  category: zod.string(),
  description: zod.string(),
})

type NewProductFormData = zod.infer<typeof newProductFormValidationSchema>

interface Product {
  id: string
  name: string
  price: number
  category: string
  description: string
}

export function CreateProduct() {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()
  
  const newProductForm = useForm<NewProductFormData>({
    resolver: zodResolver(newProductFormValidationSchema),
    defaultValues: {
      name: '',
      price: 0,
      category: '',
      description: ''
    }
  })

  function handleCreateNewProduct(data: NewProductFormData) {
    const id = String(new Date().getTime())

    const newProduct: Product = {
      id,
      name: data.name,
      price: data.price,
      category: data.category,
      description: data.description
    }

    setProducts(state => [...products, newProduct])
    
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