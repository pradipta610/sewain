import { Category } from "@/components/category/index";
import { Product } from "@/components/product/index";
import { productsCategories } from "@/data/categoriesData";

export default function Home() {

  return (
    <>
      <Category productsCategories={productsCategories} />
      <Product productsCategories={productsCategories} />
    </>
  );
}
