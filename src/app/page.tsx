import { Category } from "@/components/category/index";
import { Product } from "@/components/product/index";
import { productsCategories, categories } from "@/data/categoriesData";

export default function Home() {

  return (
    <>
      <Category categories={categories} />
      <Product productsCategories={productsCategories} />
    </>
  );
}
