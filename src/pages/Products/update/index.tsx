import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from 'zod';

import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProduct } from "../../../redux/productSlice";
import { UpdateProductForm } from "../components/UpdateProductForm";
import { UpdateProductContainer } from "./styles";

const updateProductSchema = zod.object({
  name: zod.string().optional(),
  price: zod.number().min(1, 'O preço deve ser maior que 0.'),
  quantity: zod.number().min(1, 'A quantidade deve ser maior que 0.'),
  category: zod.string().optional(),
  description: zod.string().optional(),
})

export type UpdateProductFormData = zod.infer<typeof updateProductSchema>

export function UpdateProduct() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const router = useParams()
  const { id } = router

  const updateProductForm = useForm<UpdateProductFormData>({
    resolver: zodResolver(updateProductSchema),
  })

  function handleUpdateProduct(data: UpdateProductFormData) {
    const updatedProduct = {
      id,
      ...data
    }
    dispatch(updateProduct(updatedProduct))
    reset()

    navigate('/products')
  }

  const { handleSubmit, reset } = updateProductForm
  return (
    <UpdateProductContainer>
      <h1>Editar produto</h1>

      <form onSubmit={handleSubmit(handleUpdateProduct)}>
        <FormProvider {...updateProductForm}>
          <UpdateProductForm />
        </FormProvider>
      </form>      
    </UpdateProductContainer>
  )
}