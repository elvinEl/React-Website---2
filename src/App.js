import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";

// LAYOUTS
import RootLayout from "./layouts/RootLayout";
import NewProductsDetails from "./components/products/NewProductsDetails";
import ProductsLayout from "./layouts/ProductsLayout";
import CategoryDetails from "./components/categories/CategoryDetails";
import CategoryLayout from "./layouts/CategoryLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<ProductsLayout />}>
        <Route index element={<Products />} />
        <Route path=":id" element={<NewProductsDetails />} />
      </Route>
      <Route path="categories" element={<CategoryLayout />}>
        <Route path=":id" element={<CategoryDetails />} />
      </Route>
      <Route path="projects" element={<Projects />} />
      <Route path="connect" element={<Connect />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
