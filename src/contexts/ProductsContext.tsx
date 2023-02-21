import { createContext, ReactNode, useState } from "react";

export const ProductsContext = createContext({} as ProductsContextType)

interface ProductsContextProviderProps {
  children: ReactNode
}

interface Product {
  id: string
  name: string
  price: string
  category: string
  description: string
}

interface CreateProduct extends Omit<Product, 'id'> {}
  
interface ProductsContextType {
  products: Product[]
  createNewProduct:(data: CreateProduct) => void
  deleteProduct:(productId: string) => void
}


export function ProductsContextProvider({ children }: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  function createNewProduct(data: CreateProduct) {
    console.log(data)
    const id = String(new Date().getTime())

    const newProduct: any = {
      id,
      name: data.name,
      price: data.price,
      category: data.category,
      description: data.description
    }

    setProducts(state => [...state, newProduct])
  }

  function deleteProduct(productId: string) {
    const productsWithoutThisProductId = products.filter(product => product.id !== productId)
    setProducts(productsWithoutThisProductId)
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        createNewProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}