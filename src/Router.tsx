import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { CreateProduct } from "./pages/Products/create";
import { UpdateProduct } from "./pages/Products/update";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/create" element={<CreateProduct />} />
        <Route path="/products/update/:id" element={<UpdateProduct />} />
      </Route>
    </Routes>
  )
}