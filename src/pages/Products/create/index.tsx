import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, selectProducts } from "../../../redux/productSlice";
import { NewProductForm } from "../components/NewProductForm";
import { CreateProductContainer } from "./styles";

const newProductFormValidationSchema = zod.object({
  name: zod.string().min(1, 'Este campo é obrigatório.'),
  price: zod.number().min(0, 'Este campo é obrigatório.'),
  quantity: zod.number().min(0, 'Este campo é obrigatório.'),
  category: zod.string().min(1, 'Este campo é obrigatório.'),
  description: zod.string().min(1, 'Este campo é obrigatório.'),
})

export type NewProductFormData = zod.infer<typeof newProductFormValidationSchema>

export function CreateProduct() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  const newProductForm = useForm<NewProductFormData>({
    resolver: zodResolver(newProductFormValidationSchema),
    defaultValues: {
      name: '',
      price: 0,
      category: '',
      quantity: 0,
      description: ''
    }
  })

  function handleCreateNewProduct(data: NewProductFormData) {
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